'use client';

import { useEffect, useState } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import ProfileHeader from './ProfileHeader';
import RewardsSection from './RewardsSection';
import CertificatesSection from './CertificatesSection';
import EditProfilePage from './EditProfilePage';
import { profileData, rewardsData, certificatesData } from './profileData';

export default function ProfilePage() {
  const { setCurrentPage } = useNavigation();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setCurrentPage('profile');
  }, [setCurrentPage]);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
  };

  // Show edit profile page if editing
  if (isEditing) {
    return <EditProfilePage onClose={handleCloseEdit} />;
  }

  return (
    <div className="flex-1 bg-white rounded-tl-3xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-8 border-b border-[#EDEDED]">
        <h1 className="text-3xl font-bold text-[#1A1A1A]">Profile</h1>
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
                src={profileData.avatar}
                alt={profileData.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex gap-16 p-8">
        {/* Left Column - Profile Info */}
        <div className="w-[480px] flex-shrink-0">
          <ProfileHeader
            name={profileData.name}
            role={profileData.role}
            avatar={profileData.avatar}
            email={profileData.email}
            address={profileData.address}
            country={profileData.country}
            phone={profileData.phone}
            paymentMethod={profileData.paymentMethod}
            onEditClick={handleEditProfile}
          />
        </div>

        {/* Right Column - Rewards and Certificates */}
        <div className="flex-1 space-y-8">
          <RewardsSection rewards={rewardsData} />
          <CertificatesSection certificates={certificatesData} />
        </div>
      </div>
    </div>
  );
}
