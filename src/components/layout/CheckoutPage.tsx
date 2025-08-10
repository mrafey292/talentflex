"use client";

import { useState } from "react";
import TopBar from "@/components/layout/TopBar";

interface CheckoutPageProps {
  selectedPlan: {
    name: string;
    description: string;
    price: string;
    originalPrice: number;
  };
  onBack: () => void;
}

interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
  cardNumber: string;
  expiryDate: string;
  cvc: string;
}

export default function CheckoutPage({ selectedPlan, onBack }: CheckoutPageProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "John Carl",
    phoneNumber: "(201) 555-0124",
    email: "johncarl@gmail.com",
    cardNumber: "1234 5678 9123",
    expiryDate: "09/27",
    cvc: "123"
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckout = () => {
    // Handle checkout logic here
    console.log("Processing checkout for:", selectedPlan);
    console.log("Form data:", formData);
  };

  // Calculate pricing
  const basePrice = selectedPlan.originalPrice;
  const discount = 2;
  const tax = 1;
  const total = basePrice - discount + tax;

  return (
    <div className="flex-1 bg-white rounded-tl-3xl overflow-hidden">
      {/* Top Bar */}
      <TopBar 
        title="Checkout" 
        showBack={true} 
        onBackClick={onBack}
      />
      
      {/* Content */}
      <div className="flex p-8 gap-16">
        {/* Left Column - Payment Details */}
        <div className="flex-1 space-y-8">
          {/* Payment Detail Header */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-black">Payment Detail</h2>
            <p className="text-base text-[#676767]">Securely review and manage your payment information</p>
          </div>

          {/* Shipping Address */}
          <div className="space-y-5">
            <h3 className="text-base font-bold text-black">Shipping Address</h3>
            <div className="space-y-4">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#676767]">Name</label>
                <div className="border-2 border-[#EDEDED] rounded-xl p-3">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full text-base text-[#ACACAF] outline-none"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#676767]">Phone Number</label>
                <div className="border-2 border-[#EDEDED] rounded-xl p-3">
                  <input
                    type="text"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    className="w-full text-base text-[#ACACAF] outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-5">
            <h3 className="text-base font-bold text-black">Payment Method</h3>
            <div className="space-y-4">
              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#676767]">Email</label>
                <div className="border-2 border-[#EDEDED] rounded-xl p-3">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full text-base text-[#ACACAF] outline-none"
                  />
                </div>
              </div>

              {/* Card Number */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#676767]">Card Number</label>
                <div className="border-2 border-[#EDEDED] rounded-xl p-3 flex items-center gap-4">
                  <input
                    type="text"
                    value={formData.cardNumber}
                    onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                    className="flex-1 text-base text-[#ACACAF] outline-none"
                  />
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#1A1A1A]">
                    <path 
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Expiry Date and CVC */}
              <div className="flex gap-3">
                <div className="flex-1 space-y-2">
                  <label className="text-sm font-bold text-[#676767]">Expiry Date</label>
                  <div className="border-2 border-[#EDEDED] rounded-xl p-3">
                    <input
                      type="text"
                      value={formData.expiryDate}
                      onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                      className="w-full text-base text-[#ACACAF] outline-none"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <label className="text-sm font-bold text-[#676767]">CVC/CVV</label>
                  <div className="border-2 border-[#EDEDED] rounded-xl p-3">
                    <input
                      type="text"
                      value={formData.cvc}
                      onChange={(e) => handleInputChange('cvc', e.target.value)}
                      className="w-full text-base text-[#ACACAF] outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="w-96 border border-[#EDEDED] rounded-3xl p-6 h-fit">
          {/* Summary Header */}
          <div className="space-y-2 mb-6">
            <h2 className="text-2xl font-bold text-black">Summary Order</h2>
            <p className="text-base text-[#676767]">Review your items before checkout</p>
          </div>

          {/* Selected Plan */}
          <div className="space-y-6">
            <div className="bg-[#F6F6F6] rounded-2xl p-4">
              <div className="space-y-2">
                <h4 className="text-base font-bold text-black">{selectedPlan.name}</h4>
                <p className="text-sm text-[#676767]">{selectedPlan.description}</p>
              </div>
              <div className="flex items-end gap-2 mt-4">
                <span className="text-xl font-bold text-black">{selectedPlan.price}</span>
                <span className="text-xs text-[#969699]">/month</span>
              </div>
            </div>

            {/* Pricing Breakdown */}
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#676767]">Price</span>
                  <span className="text-sm text-black">${basePrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#676767]">Discount</span>
                  <span className="text-sm text-black">-${discount}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-[#676767]">Tax</span>
                  <span className="text-sm text-black">+${tax}</span>
                </div>
              </div>
              
              <hr className="border-[#EDEDED]" />
              
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-black">Total</span>
                <span className="text-xl font-bold text-black">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <div className="space-y-4">
              <button 
                onClick={handleCheckout}
                className="w-full bg-[#3D80F8] text-white font-bold py-4 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Checkout Now
              </button>

              {/* Or separator */}
              <div className="flex items-center gap-4">
                <hr className="flex-1 border-[#EDEDED]" />
                <span className="text-sm text-[#676767]">or</span>
                <hr className="flex-1 border-[#EDEDED]" />
              </div>

              {/* Payment Options */}
              <div className="flex gap-3">
                {/* PayPal */}
                <div className="flex-1 border border-[#D3D3D3] rounded-full p-3 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <svg width="21" height="6" viewBox="0 0 21 6" fill="none">
                      <path d="M0 0H3.88C3.88 0 3.88 4.46 0 4.46V0Z" fill="#003087"/>
                      <path d="M18.95 0H20.62C20.62 0 20.62 4.46 18.95 4.46V0Z" fill="#009CDE"/>
                      <path d="M7.78 1.48H11.48C11.48 1.48 11.48 5.5 7.78 5.5V1.48Z" fill="#003087"/>
                      <path d="M15.07 1.41H18.84C18.84 1.41 18.84 4.53 15.07 4.53V1.41Z" fill="#009CDE"/>
                      <path d="M3.64 1.41H7.41C7.41 1.41 7.41 4.53 3.64 4.53V1.41Z" fill="#003087"/>
                      <path d="M11.44 0H15.32C15.32 0 15.32 4.46 11.44 4.46V0Z" fill="#009CDE"/>
                    </svg>
                  </div>
                </div>

                {/* Apple Pay */}
                <div className="flex-1 border border-[#D3D3D3] rounded-full p-3 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
                      <path d="M20 0C20 4.53 16.42 8.21 12 8.21C7.58 8.21 4 4.53 4 0H20Z" fill="#000000"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
