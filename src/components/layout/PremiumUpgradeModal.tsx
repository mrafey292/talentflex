'use client';

import { useState } from 'react';
import CheckoutPage from './CheckoutPage';

interface PremiumUpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  period: string;
  features: string[];
  buttonText: string;
  isRecommended?: boolean;
  isPopular?: boolean;
}

interface PurchaseHistory {
  planName: string;
  date: string;
  amount: string;
  status: 'Success' | 'Failed';
}

export default function PremiumUpgradeModal({ isOpen, onClose }: PremiumUpgradeModalProps) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutPlan, setCheckoutPlan] = useState<{
    name: string;
    description: string;
    price: string;
    originalPrice: number;
  } | null>(null);

  if (!isOpen) return null;

  const plans: PricingPlan[] = [
    {
      id: 'basic',
      name: 'Basic',
      description: 'Essential features to get started',
      price: 40,
      period: '/month',
      features: [
        'Essential features to get started',
        'Basic AI tools and templates',
        'Standard support',
        'Limited storage',
        'Email notifications',
        'Basic analytics'
      ],
      buttonText: 'Get Started'
    },
    {
      id: 'regular',
      name: 'Regular',
      description: 'More tools for better productivity',
      price: 80,
      period: '/month',
      features: [
        'Everything in Basic',
        'Advanced AI capabilities',
        'Priority support',
        'Increased storage',
        'Advanced analytics',
        'Team collaboration'
      ],
      buttonText: 'Get Started',
      isRecommended: true
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Unlock all features for the best experience!',
      price: 120,
      period: '/month',
      features: [
        'Everything in Regular',
        'Unlimited AI access',
        'Premium templates',
        'Unlimited storage',
        'Custom integrations',
        'Dedicated support'
      ],
      buttonText: 'Get Started'
    }
  ];

  const purchaseHistory: PurchaseHistory[] = [
    {
      planName: 'Premium Plan',
      date: 'March, 28, 2025',
      amount: '$120',
      status: 'Success'
    },
    {
      planName: 'Premium Plan',
      date: 'March, 28, 2025',
      amount: '$120',
      status: 'Failed'
    },
    {
      planName: 'Premium Plan',
      date: 'March, 28, 2025',
      amount: '$120',
      status: 'Success'
    },
    {
      planName: 'Premium Plan',
      date: 'March, 28, 2025',
      amount: '$120',
      status: 'Success'
    }
  ];

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    
    // Find the selected plan
    const plan = plans.find(p => p.id === planId);
    if (plan) {
      setCheckoutPlan({
        name: plan.name,
        description: plan.description,
        price: `$${plan.price}`,
        originalPrice: plan.price
      });
      setShowCheckout(true);
    }
  };

  const handleBackFromCheckout = () => {
    setShowCheckout(false);
    setCheckoutPlan(null);
    setSelectedPlan(null);
  };

  // If checkout is shown, display checkout page
  if (showCheckout && checkoutPlan) {
    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
        <div className="bg-white rounded-3xl max-w-7xl w-full max-h-[90vh] overflow-hidden">
          <CheckoutPage
            selectedPlan={checkoutPlan}
            onBack={handleBackFromCheckout}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl max-w-7xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-8 border-b border-[#EDEDED]">
          <h1 className="text-3xl font-bold text-[#1A1A1A]">Subscription</h1>
          <div className="flex items-center gap-4">
            <button className="bg-gradient-to-r from-[#D96570] to-[#4A83F0] text-white px-6 py-3 rounded-lg font-bold text-sm">
              AI Career Coach
            </button>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              <svg className="w-6 h-6 text-[#676767]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-104px)]">
          {/* Pricing Plans */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
              {plans.map((plan) => (
                <div 
                  key={plan.id}
                  className={`relative border rounded-3xl p-6 flex flex-col ${
                    plan.isRecommended ? 'border-[#3D80F8] border-2' : 'border-[#EDEDED]'
                  }`}
                >
                  {plan.isRecommended && (
                    <div className="absolute -top-3 right-0 bg-[#3D80F8] text-white text-xs font-bold px-3 py-1 rounded-full">
                      Recommendation
                    </div>
                  )}
                  
                  {/* Plan Header */}
                  <div className="flex flex-col gap-2 mb-6">
                    <h3 className="text-2xl font-bold text-[#1A1A1A]">{plan.name}</h3>
                    <p className="text-base text-[#676767]">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-bold text-[#1A1A1A]">${plan.price}</span>
                      <span className="text-sm text-[#969699]">{plan.period}</span>
                    </div>
                    <button
                      onClick={() => handlePlanSelect(plan.id)}
                      className={`w-full font-bold py-3 px-6 rounded-lg transition-colors ${
                        plan.isRecommended
                          ? 'bg-[#3D80F8] text-white hover:bg-blue-600'
                          : 'border border-[#D3D3D3] text-[#1A1A1A] hover:bg-gray-50'
                      }`}
                    >
                      {plan.buttonText}
                    </button>
                  </div>

                  {/* Features */}
                  <div className="flex-1">
                    <h4 className="text-xs text-[#676767] mb-3">Features you get :</h4>
                    <div className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-5 h-5 border border-[#3D80F8] rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-[#3D80F8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm text-[#1A1A1A]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Purchase History */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1A1A1A]">Purchase History</h2>
              <div className="border border-[#EDEDED] rounded-3xl overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-4 bg-gray-50 border-b border-[#EDEDED]">
                  <div className="p-4">
                    <span className="text-xs text-[#676767] font-medium">Plan Name</span>
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-[#676767] font-medium">Date</span>
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-[#676767] font-medium">Amount</span>
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-[#676767] font-medium">Status</span>
                  </div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-[#EDEDED]">
                  {purchaseHistory.map((purchase, index) => (
                    <div key={index} className="grid grid-cols-4">
                      <div className="p-4">
                        <span className="text-sm text-[#1A1A1A]">{purchase.planName}</span>
                      </div>
                      <div className="p-4">
                        <span className="text-sm text-[#1A1A1A]">{purchase.date}</span>
                      </div>
                      <div className="p-4">
                        <span className="text-sm text-[#1A1A1A]">{purchase.amount}</span>
                      </div>
                      <div className="p-4">
                        <span className={`inline-block px-3 py-1 rounded text-xs font-medium ${
                          purchase.status === 'Success'
                            ? 'bg-[#E8FBEB] text-[#229A1B]'
                            : 'bg-[#F5EBEB] text-[#9A1B1B]'
                        }`}>
                          {purchase.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
