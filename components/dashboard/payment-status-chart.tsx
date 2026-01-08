"use client"

import { useEffect, useRef } from "react"

export function PaymentStatusChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with high DPI support
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)
    canvas.style.width = rect.width + 'px'
    canvas.style.height = rect.height + 'px'

    // Professional data with brand colors
    const data = [
      {
        label: "Paid",
        value: 75,
        color: "#22c55e"
      },
      {
        label: "Pending",
        value: 15,
        color: "#007B8A" // Sophisticated Teal
      },
      {
        label: "Overdue",
        value: 10,
        color: "#ef4444"
      },
    ]

    // Calculate total
    const total = data.reduce((sum, item) => sum + item.value, 0)

    // Enhanced chart dimensions
    let startAngle = -Math.PI / 2 // Start from top
    const radius = Math.min(rect.width, rect.height) / 2 - 40
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const innerRadius = radius / 2.2

    // Draw each slice with solid colors
    data.forEach((item, index) => {
      const sliceAngle = (2 * Math.PI * item.value) / total

      // Draw the slice with solid color
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
      ctx.closePath()

      // Add subtle shadow
      ctx.shadowColor = 'rgba(0, 0, 0, 0.08)'
      ctx.shadowBlur = 8
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 2

      ctx.fillStyle = item.color
      ctx.fill()

      // Reset shadow
      ctx.shadowColor = 'transparent'
      ctx.shadowBlur = 0
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 0

      // Add border
      ctx.strokeStyle = '#ffffff'
      ctx.lineWidth = 3
      ctx.stroke()

      // Calculate the angle for the text
      const textAngle = startAngle + sliceAngle / 2
      const textRadius = (radius + innerRadius) / 2
      const textX = centerX + textRadius * Math.cos(textAngle)
      const textY = centerY + textRadius * Math.sin(textAngle)

      // Draw the percentage with modern styling
      ctx.fillStyle = "#ffffff"
      ctx.font = "bold 16px Inter, system-ui, sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      
      // Add text shadow
      ctx.shadowColor = 'rgba(0, 0, 0, 0.3)'
      ctx.shadowBlur = 2
      ctx.shadowOffsetX = 1
      ctx.shadowOffsetY = 1
      
      ctx.fillText(`${Math.round(item.value)}%`, textX, textY)

      // Reset shadow
      ctx.shadowColor = 'transparent'
      ctx.shadowBlur = 0
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 0

      startAngle += sliceAngle
    })

    // Draw center circle with solid color
    ctx.beginPath()
    ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI)
    ctx.fillStyle = '#ffffff'
    ctx.fill()

    // Add border to center
    ctx.strokeStyle = '#e2e8f0'
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw the center text - using brand navy blue
    ctx.fillStyle = "#0F1C3F" // Deep Navy Blue
    ctx.font = "bold 28px Inter, system-ui, sans-serif"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("48", centerX, centerY - 8)

    ctx.font = "600 14px Inter, system-ui, sans-serif"
    ctx.fillStyle = "#64748b"
    ctx.fillText("Total Tenants", centerX, centerY + 12)

    // Professional legend with solid colors
    const legendY = rect.height - 40
    const legendItemWidth = 110
    const totalLegendWidth = data.length * legendItemWidth
    const legendStartX = (rect.width - totalLegendWidth) / 2 + legendItemWidth / 2

    data.forEach((item, index) => {
      const legendX = legendStartX + index * legendItemWidth

      // Draw legend indicator with solid color
      ctx.beginPath()
      ctx.roundRect(legendX - 50, legendY, 15, 15, 4)
      ctx.fillStyle = item.color
      ctx.fill()

      // Legend text with professional typography
      ctx.fillStyle = "#0F1C3F" // Deep Navy Blue
      ctx.font = "600 13px Inter, system-ui, sans-serif"
      ctx.textAlign = "left"
      ctx.textBaseline = "middle"
      ctx.fillText(item.label, legendX - 30, legendY + 7.5)

      ctx.font = "500 12px Inter, system-ui, sans-serif"
      ctx.fillStyle = "#6b7280"
      ctx.fillText(`${item.value}%`, legendX - 30, legendY + 22)
    })
  }, [])

  return (
    <div className="h-[300px] sm:h-[350px] w-full">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}
