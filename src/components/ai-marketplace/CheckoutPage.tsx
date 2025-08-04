import Image from "next/image";
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

export default function CheckoutPage({ selectedPlan, onBack }: CheckoutPageProps) {
  const discount = 2;
  const tax = 1;
  const finalPrice = selectedPlan.originalPrice - discount + tax;

  return (
    <div className="flex-1 bg-white rounded-tl-3xl overflow-hidden">
      {/* Top Bar */}
      <TopBar 
        title="Checkout" 
        showBack={true} 
        onBackClick={onBack}
      />
      
      {/* Content */}
      <div className="p-8 space-y-8">
        <div className="flex gap-16">
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
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#676767]">Name</label>
                  <input 
                    type="text" 
                    defaultValue="John Carl"
                    className="w-full p-3 border-2 border-[#EDEDED] rounded-lg text-base text-[#ACACAF] outline-none focus:border-[#3D80F8]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#676767]">Phone Number</label>
                  <input 
                    type="text" 
                    defaultValue="(201) 555-0124"
                    className="w-full p-3 border-2 border-[#EDEDED] rounded-lg text-base text-[#ACACAF] outline-none focus:border-[#3D80F8]"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-5">
              <h3 className="text-base font-bold text-black">Payment Method</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#676767]">Email</label>
                  <input 
                    type="email" 
                    defaultValue="johncarl@gmail.com"
                    className="w-full p-3 border-2 border-[#EDEDED] rounded-lg text-base text-[#ACACAF] outline-none focus:border-[#3D80F8]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#676767]">Card Number</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      defaultValue="1234 5678 9123"
                      className="w-full p-3 pr-12 border-2 border-[#EDEDED] rounded-lg text-base text-[#ACACAF] outline-none focus:border-[#3D80F8]"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <Image src="/icons/credit-card.svg" alt="Credit Card" width={20} height={20} />
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-1 space-y-2">
                    <label className="text-sm font-bold text-[#676767]">Expiry Date</label>
                    <input 
                      type="text" 
                      defaultValue="09/27"
                      className="w-full p-3 border-2 border-[#EDEDED] rounded-lg text-base text-[#ACACAF] outline-none focus:border-[#3D80F8]"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <label className="text-sm font-bold text-[#676767]">CVC/CVV</label>
                    <input 
                      type="text" 
                      defaultValue="123"
                      className="w-full p-3 border-2 border-[#EDEDED] rounded-lg text-base text-[#ACACAF] outline-none focus:border-[#3D80F8]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="w-[400px] border border-[#EDEDED] rounded-3xl p-6 h-fit">
            <div className="space-y-8">
              {/* Summary Header */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-black">Summary Order</h3>
                <p className="text-base text-[#676767]">Review your items before checkout</p>
              </div>

              {/* Selected Plan */}
              <div className="bg-[#F6F6F6] rounded-2xl p-4 space-y-4">
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-black">{selectedPlan.name}</h4>
                  <p className="text-sm text-[#676767]">{selectedPlan.description}</p>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-xl font-bold text-black">{selectedPlan.price}</span>
                  <span className="text-xs text-[#969699]">/month</span>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#676767]">Price</span>
                    <span className="text-sm text-black">{selectedPlan.price}</span>
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
                  <span className="text-xl font-bold text-black">${finalPrice.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Buttons */}
              <div className="space-y-4">
                <button className="w-full bg-[#3D80F8] text-white font-bold py-4 rounded-lg hover:bg-blue-600 transition-colors">
                  Checkout Now
                </button>
                
                <div className="flex items-center gap-4">
                  <hr className="flex-1 border-[#EDEDED]" />
                  <span className="text-sm text-[#676767]">or</span>
                  <hr className="flex-1 border-[#EDEDED]" />
                </div>

                <div className="flex gap-3 justify-center">
                  <button className="border border-[#D3D3D3] rounded-full p-3 hover:bg-gray-50 transition-colors">
                    <div className="w-6 h-6 bg-[#003087] rounded flex items-center justify-center text-white text-xs font-bold">
                      P
                    </div>
                  </button>
                  <button className="border border-[#D3D3D3] rounded-full p-3 hover:bg-gray-50 transition-colors">
                    <div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white text-xs font-bold">
                      A
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
