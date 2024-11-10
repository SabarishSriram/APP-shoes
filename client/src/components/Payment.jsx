"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle } from "lucide-react"
import { useNavigate } from "react-router"
export default function PaymentGateway() {
    const navigate=useNavigate();
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    name: "",
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsSuccess(true)
    }, 2000)
  }

  const resetForm = () => {
    setFormData({
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      name: "",
    })
    setIsSuccess(false)
    navigate("/")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        {!isSuccess ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Complete Your Payment</h2>
            <p className="text-gray-600 mb-6">Enter your card details to process the payment.</p>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="cardNumber" className="text-right">
                    Card Number
                  </Label>
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    className="col-span-3"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="expiryDate" className="text-right">
                    Expiry Date
                  </Label>
                  <Input
                    id="expiryDate"
                    name="expiryDate"
                    className="col-span-3"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="cvv" className="text-right">
                    CVV
                  </Label>
                  <Input
                    id="cvv"
                    name="cvv"
                    className="col-span-3"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name on Card
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    className="col-span-3"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full mt-6" disabled={isProcessing}>
                {isProcessing ? "Processing..." : "Pay Now"}
              </Button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-6">
            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Transaction Successful!</h2>
            <p className="text-center mb-6">
              Your payment has been processed successfully. Thank you for your purchase!
            </p>
            <Button onClick={resetForm}>Close</Button>
          </div>
        )}
      </div>
    </div>
  )
}