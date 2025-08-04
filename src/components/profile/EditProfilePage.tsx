'use client';

import React, { useState } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import ChangePasswordModal from './ChangePasswordModal';

interface EditProfilePageProps {
  onClose: () => void;
}

export default function EditProfilePage({ onClose }: EditProfilePageProps) {
  const { setCurrentPage } = useNavigation();
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: 'John Carl',
    role: 'Graphic Designer',
    email: 'johncarl@email.com',
    address: '4517 Washington Ave. Manchester, Kentucky 39495',
    country: 'Singapore',
    phone: '(201) 555-0124'
  });

  // Ensure the navigation context shows profile as active
  React.useEffect(() => {
    setCurrentPage('profile');
  }, [setCurrentPage]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Handle save logic here
    console.log('Saving profile data:', formData);
    onClose();
  };

  return (
    <div className="flex-1 bg-white rounded-tl-3xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-8 border-b border-[#EDEDED]">
        <h1 className="text-3xl font-bold text-[#1A1A1A]">Setting</h1>
        <div className="flex items-center gap-4">
          <button className="bg-gradient-to-r from-[#D96570] to-[#4A83F0] text-white px-6 py-3 rounded-lg font-bold text-sm">
            AI Career Coach
          </button>
          
          <div className="flex items-center gap-2">
            <button className="p-3 border border-[#EDEDED] rounded-full hover:bg-gray-50 transition-colors">
              <div className="w-6 h-6 bg-gradient-to-r from-[#D96570] to-[#4A83F0] rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l3.057-3A1.001 1.001 0 019 1v10.93l3.5 2.036a1 1 0 01.5.866v8.198l-4.585-2.707A1 1 0 018 20.464v-8.196L5 10.232V3z" />
                </svg>
              </div>
            </button>
            
            <button className="p-3 border border-[#EDEDED] rounded-full hover:bg-gray-50 transition-colors">
              <svg className="w-6 h-6 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h1a3 3 0 003-3V9a5 5 0 0110 0v3h2a2 2 0 012 2v5a2 2 0 01-2 2H4z" />
              </svg>
            </button>
            
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=165&h=165&fit=crop&crop=face"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex gap-16 p-8">
        {/* Left Column - Profile Settings */}
        <div className="flex-1 space-y-8">
          {/* Profile Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">Settings Your Account</h2>
              <p className="text-base text-[#676767]">
                Update your personal details, preferences, and job interests. Keep your profile up to date to get the best job recommendations
              </p>
            </div>

            {/* Avatar Section */}
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=165&h=165&fit=crop&crop=face"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="absolute -bottom-2 -right-2 w-10 h-10 bg-white border border-[#EDEDED] rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
                  <svg className="w-5 h-5 text-[#1A1A1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-bold text-[#1A1A1A] mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 bg-[#F3F3F3] border-2 border-[#D3D3D3] rounded-lg text-base text-[#05060F] focus:outline-none focus:border-[#3D80F8]"
                />
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-bold text-[#1A1A1A] mb-2">Role</label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => handleInputChange('role', e.target.value)}
                    className="w-full px-4 py-3 bg-[#F3F3F3] border-2 border-[#D3D3D3] rounded-lg text-base text-[#05060F] focus:outline-none focus:border-[#3D80F8] pr-12"
                  />
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#676767]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-[#1A1A1A] mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 bg-[#F3F3F3] border-2 border-[#D3D3D3] rounded-lg text-base text-[#05060F] focus:outline-none focus:border-[#3D80F8]"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-bold text-[#1A1A1A] mb-2">Password</label>
                <div className="flex gap-4">
                  <input
                    type="password"
                    value="********"
                    disabled
                    className="flex-1 px-4 py-3 bg-[#F3F3F3] border-2 border-[#D3D3D3] rounded-lg text-base text-[#05060F]"
                  />
                  <button 
                    onClick={() => setIsPasswordModalOpen(true)}
                    className="px-4 py-3 border border-[#D3D3D3] rounded-lg text-sm font-bold text-[#1A1A1A] hover:bg-gray-50 transition-colors"
                  >
                    Change Password
                  </button>
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-bold text-[#1A1A1A] mb-2">Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="w-full px-4 py-3 bg-[#F3F3F3] border-2 border-[#D3D3D3] rounded-lg text-base text-[#05060F] focus:outline-none focus:border-[#3D80F8]"
                />
              </div>

              {/* Country and Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-[#1A1A1A] mb-2">Country</label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    className="w-full px-4 py-3 bg-[#F3F3F3] border-2 border-[#D3D3D3] rounded-lg text-base text-[#05060F] focus:outline-none focus:border-[#3D80F8]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#1A1A1A] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 bg-[#F3F3F3] border-2 border-[#D3D3D3] rounded-lg text-base text-[#05060F] focus:outline-none focus:border-[#3D80F8]"
                  />
                </div>
              </div>
            </div>

            {/* Save Button */}
            <button
              onClick={handleSave}
              className="w-full bg-[#3D80F8] text-white font-bold text-base py-4 px-8 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Save and Update Changes
            </button>
          </div>
        </div>

        {/* Right Column - Payment & Transaction History */}
        <div className="flex-1 space-y-8">
          {/* Payment Section */}
          <div className="space-y-6">
            {/* Credit Card */}
            <div className="relative h-[300px] bg-gradient-to-br from-[#1C3F80] to-[#020C1D] rounded-3xl p-8 text-white overflow-hidden">
              <div className="absolute top-8 left-8">
                <h3 className="text-2xl font-bold mb-2">Mastercard</h3>
              </div>
              
              <div className="absolute top-6 right-8">
                <div className="flex space-x-1">
                  <div className="w-8 h-8 bg-[#FF5A00] rounded-full opacity-90"></div>
                  <div className="w-8 h-8 bg-[#EB001B] rounded-full opacity-90 -ml-3"></div>
                  <div className="w-8 h-8 bg-[#F79E1B] rounded-full opacity-90 -ml-3"></div>
                </div>
              </div>

              <div className="absolute bottom-20 left-8">
                <p className="text-3xl font-medium tracking-wider">1234 5678 9123 XXX</p>
              </div>

              <div className="absolute bottom-8 left-8 flex gap-10">
                <div>
                  <p className="text-xs text-[#C5DAFF] mb-1">VALID THRU</p>
                  <p className="text-xl font-medium">05/25</p>
                </div>
                <div>
                  <p className="text-xs text-[#C5DAFF] mb-1">CVV</p>
                  <p className="text-xl font-medium">09X</p>
                </div>
              </div>
            </div>

            {/* Card Controls */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <button className="w-12 h-12 border border-[#EDEDED] rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <svg className="w-6 h-6 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="w-12 h-12 border border-[#EDEDED] rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <svg className="w-6 h-6 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="flex gap-3">
                <button className="bg-[#3D80F8] text-white px-6 py-3 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add Card
                </button>
                <button className="border border-[#D3D3D3] text-[#676767] px-6 py-3 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          </div>

          {/* Transaction History */}
          <div className="border border-[#EDEDED] rounded-3xl p-6">
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-6">Transaction History</h3>
            
            <div className="space-y-6">
              {/* Today */}
              <div>
                <h4 className="font-bold text-base text-[#1A1A1A] mb-4">Today</h4>
                <div className="space-y-3">
                  <TransactionItem
                    icon="book"
                    title="Graphic Design Fundamentals"
                    type="Course"
                    time="08:00 AM"
                    amount="- $25"
                    isNegative={true}
                  />
                  <TransactionItem
                    icon="design"
                    title="Logo Redesign Challenge"
                    type="Challenge"
                    time="10:00 AM"
                    amount="+ $100"
                    isNegative={false}
                  />
                </div>
              </div>

              {/* Yesterday */}
              <div>
                <h4 className="font-bold text-base text-[#1A1A1A] mb-4">Yesterday</h4>
                <div className="space-y-3">
                  <TransactionItem
                    icon="book"
                    title="Graphic Design Fundamentals"
                    type="Course"
                    time="08:00 AM"
                    amount="- $25"
                    isNegative={true}
                  />
                  <TransactionItem
                    icon="design"
                    title="Logo Redesign Challenge"
                    type="Challenge"
                    time="10:00 AM"
                    amount="+ $100"
                    isNegative={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Change Password Modal */}
      <ChangePasswordModal 
        isOpen={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
      />
    </div>
  );
}

interface TransactionItemProps {
  icon: 'book' | 'design';
  title: string;
  type: string;
  time: string;
  amount: string;
  isNegative: boolean;
}

function TransactionItem({ icon, title, type, time, amount, isNegative }: TransactionItemProps) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white border border-[#EDEDED] rounded-2xl">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
        icon === 'book' ? 'bg-[#E2ECFF]' : 'bg-[#FFE2EF]'
      }`}>
        {icon === 'book' ? (
          <svg className="w-6 h-6 text-[#3D80F8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-[#FF4297]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
          </svg>
        )}
      </div>
      
      <div className="flex-1">
        <h5 className="font-bold text-sm text-[#000000]">{title}</h5>
        <div className="flex items-center gap-2 mt-1">
          <span className="px-2 py-1 bg-[#F6F6F6] rounded text-xs text-[#000000]">{type}</span>
          <span className="text-xs text-[#676767]">{time}</span>
        </div>
      </div>
      
      <div className={`font-bold text-xl ${isNegative ? 'text-[#FD2121]' : 'text-[#3CBA30]'}`}>
        {amount}
      </div>
    </div>
  );
}
