"use client";

import { useState } from "react";
import TopBar from "@/components/layout/TopBar";

interface PricingPageProps {
  onBack: () => void;
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice: number;
  features: string[];
  buttonText: string;
  isRecommended?: boolean;
  isPopular?: boolean;
}

interface PurchaseHistoryItem {
  planName: string;
  date: string;
  amount: string;
  status: 'Success' | 'Failed';
}

export default function PricingPage({ onBack }: PricingPageProps) {
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  const pricingPlans: PricingPlan[] = [
    {
      id: "basic",
      name: "Basic",
      description: "Essential features to get started",
      price: "$40",
      originalPrice: 40,
      features: [
        "Essential features to get started",
        "Essential features to get started",
        "Essential features to get started",
        "Essential features to get started",
        "Essential features to get started",
        "Essential features to get started"
      ],
      buttonText: "Get Started"
    },
    {
      id: "regular",
      name: "Regular",
      description: "More tools for better productivity",
      price: "$80",
      originalPrice: 80,
      features: [
        "Essential features to get started",
        "Essential features to get started",
        "Essential features to get started",
        "Essential features to get started",
        "Essential features to get started",
        "Essential features to get started"
      ],
      buttonText: "Get Started",
      isRecommended: true
    },
    {
      id: "premium",
      name: "Premium",
      description: "Unlock all features for the best experience!",
      price: "$120",
      originalPrice: 120,
      features: [
        "Essential features to get started",
        "Essential features to get started",
        "Essential features to get started",
        "Essential features to get started",
        "Essential features to get started",
        "Essential features to get started"
      ],
      buttonText: "Get Started"
    }
  ];

  const purchaseHistory: PurchaseHistoryItem[] = [
    {
      planName: "Premium Plan",
      date: "March, 28, 2025",
      amount: "$120",
      status: "Success"
    },
    {
      planName: "Premium Plan",
      date: "March, 28, 2025",
      amount: "$120",
      status: "Failed"
    },
    {
      planName: "Premium Plan",
      date: "March, 28, 2025",
      amount: "$120",
      status: "Success"
    },
    {
      planName: "Premium Plan",
      date: "March, 28, 2025",
      amount: "$120",
      status: "Success"
    }
  ];

  const handlePlanSelect = (planId: string) => {
    setSelectedPlanId(planId);
    // You can add payment processing logic here
    console.log(`Selected plan: ${planId}`);
  };

  return (
    <div className="flex-1 bg-white rounded-tl-3xl overflow-hidden">
      {/* Top Bar */}
      <TopBar 
        title="Subscription" 
        showBack={false} 
        onBackClick={onBack}
      />
      
      {/* Content */}
      <div className="p-8 space-y-8">
        {/* Pricing Plans */}
        <div className="grid grid-cols-3 gap-4">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`
                relative border rounded-3xl p-6 flex flex-col
                ${plan.isRecommended 
                  ? 'border-2 border-[#3D80F8]' 
                  : 'border border-[#EDEDED]'
                }
              `}
            >
              {/* Recommendation Badge */}
              {plan.isRecommended && (
                <div className="absolute -top-3 right-0 bg-[#3D80F8] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Recommendation
                </div>
              )}

              {/* Plan Header */}
              <div className="flex-1 space-y-6">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-black">{plan.name}</h4>
                  <p className="text-base text-[#676767]">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold text-black">{plan.price}</span>
                    <span className="text-sm text-[#969699]">/month</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <p className="text-xs text-[#676767]">Features you get :</p>
                  <div className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="border border-[#3D80F8] rounded-full p-1">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path 
                              d="M2.5 6L4.5 8L9.5 3" 
                              stroke="#3D80F8" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span className="text-sm text-black">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="mt-6">
                <button 
                  onClick={() => handlePlanSelect(plan.id)}
                  className={`
                    w-full font-bold py-3 rounded-lg transition-colors
                    ${plan.isRecommended
                      ? 'bg-[#3D80F8] text-white hover:bg-blue-600'
                      : 'border border-[#D3D3D3] text-black hover:bg-gray-50'
                    }
                  `}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Purchase History */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black">Purchase History</h3>
          
          <div className="border border-[#EDEDED] rounded-3xl overflow-hidden">
            {/* Table Header */}
            <div className="flex items-center border-b border-[#EDEDED] bg-gray-50">
              <div className="flex-1 p-3">
                <span className="text-xs font-normal text-[#676767]">Plan Name</span>
              </div>
              <div className="w-60 p-3">
                <span className="text-xs font-normal text-[#676767]">Date</span>
              </div>
              <div className="w-40 p-3">
                <span className="text-xs font-normal text-[#676767]">Amount</span>
              </div>
              <div className="w-50 p-3">
                <span className="text-xs font-normal text-[#676767]">Status</span>
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-[#EDEDED]">
              {purchaseHistory.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-1 p-3">
                    <span className="text-sm text-black">{item.planName}</span>
                  </div>
                  <div className="w-60 p-3">
                    <span className="text-sm text-black">{item.date}</span>
                  </div>
                  <div className="w-40 p-3">
                    <span className="text-sm text-black">{item.amount}</span>
                  </div>
                  <div className="w-50 p-3">
                    <span 
                      className={`
                        inline-block px-3 py-1 rounded text-xs font-normal
                        ${item.status === 'Success' 
                          ? 'bg-[#E8FBEB] text-[#229A1B]' 
                          : 'bg-[#F5EBEB] text-[#9A1B1B]'
                        }
                      `}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
