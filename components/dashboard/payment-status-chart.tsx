"use client"

import { useEffect, useRef } from "react"

export function PaymentStatusChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Data for the pie chart
    const data = [
      { label: "Paid", value: 75, color: "#22c55e" },
      { label: "Pending", value: 15, color: "#f59e0b" },
      { label: "Overdue", value: 10, color: "#ef4444" },
    ]

    // Calculate total
    const total = data.reduce((sum, item) => sum + item.value, 0)

    // Draw the pie chart
    let startAngle = 0
    const radius = Math.min(canvas.width, canvas.height) / 2 - 20
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    data.forEach((item) => {
      // Calculate the angle
      const sliceAngle = (2 * Math.PI * item.value) / total

      // Draw the slice
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
      ctx.closePath()

      // Fill the slice
      ctx.fillStyle = item.color
      ctx.fill()

      // Calculate the angle for the text
      const textAngle = startAngle + sliceAngle / 2
      const textX = centerX + (radius / 1.5) * Math.cos(textAngle)
      const textY = centerY + (radius / 1.5) * Math.sin(textAngle)

      // Draw the percentage
      ctx.fillStyle = "#ffffff"
      ctx.font = "bold 14px Inter, sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(`${Math.round(item.value)}%`, textX, textY)

      // Update the starting angle for the next slice
      startAngle += sliceAngle
    })

    // Draw a white circle in the center
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius / 2.5, 0, 2 * Math.PI)
    ctx.fillStyle = "#ffffff"
    ctx.fill()

    // Draw the total in the center
    ctx.fillStyle = "#000000"
    ctx.font = "bold 16px Inter, sans-serif"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("48", centerX, centerY - 10)
    ctx.font = "12px Inter, sans-serif"
    ctx.fillText("Tenants", centerX, centerY + 10)

    // Draw the legend
    const legendY = canvas.height - 30
    const legendSpacing = 100
    const legendStartX = centerX - ((data.length - 1) * legendSpacing) / 2

    data.forEach((item, index) => {
      const legendX = legendStartX + index * legendSpacing

      // Draw the color box
      ctx.fillStyle = item.color
      ctx.fillRect(legendX - 40, legendY, 12, 12)

      // Draw the label
      ctx.fillStyle = "#000000"
      ctx.font = "12px Inter, sans-serif"
      ctx.textAlign = "left"
      ctx.textBaseline = "middle"
      ctx.fillText(`${item.label}: ${item.value}%`, legendX - 24, legendY + 6)
    })
  }, [])

  return (
    <div className="h-[300px] w-full">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}
