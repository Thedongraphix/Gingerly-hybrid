"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, Plus } from "lucide-react"

export function PaymentMethodForm() {
  const [showForm, setShowForm] = useState(false)
  const [paymentType, setPaymentType] = useState("card")

  if (!showForm) {
    return (
      <Button onClick={() => setShowForm(true)} className="w-full">
        <Plus className="mr-2 h-4 w-4" />
        Add Payment Method
      </Button>
    )
  }

  return (
    <div className="space-y-4 rounded-lg border p-4">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">Add Payment Method</h3>
        <Button variant="ghost" size="sm" onClick={() => setShowForm(false)}>
          Cancel
        </Button>
      </div>
      <div className="space-y-4">
        <RadioGroup defaultValue="card" onValueChange={setPaymentType} className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card">Credit/Debit Card</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="mpesa" id="mpesa" />
            <Label htmlFor="mpesa">Mpesa</Label>
          </div>
        </RadioGroup>

        {paymentType === "card" ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="card-name">Name on card</Label>
              <Input id="card-name" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="card-number">Card number</Label>
              <Input id="card-number" placeholder="4242 4242 4242 4242" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1 space-y-2">
                <Label htmlFor="expiry-month">Month</Label>
                <Input id="expiry-month" placeholder="MM" />
              </div>
              <div className="col-span-1 space-y-2">
                <Label htmlFor="expiry-year">Year</Label>
                <Input id="expiry-year" placeholder="YY" />
              </div>
              <div className="col-span-1 space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" />
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone-number">Phone Number</Label>
              <Input id="phone-number" placeholder="+254 712 345 678" />
            </div>
          </div>
        )}

        <Button className="w-full">
          <CreditCard className="mr-2 h-4 w-4" />
          Add {paymentType === "card" ? "Card" : "Mpesa"}
        </Button>
      </div>
    </div>
  )
}
