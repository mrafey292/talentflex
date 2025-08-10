'use client';

import { useState } from 'react';
import TopBar from '@/components/layout/TopBar';
import ProfileHeader from './ProfileHeader';
import RewardsSection from './RewardsSection';
import CertificatesSection from './CertificatesSection';
import EditProfilePage from './EditProfilePage';
import { profileData, rewardsData, certificatesData } from './profileData';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

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
      <TopBar title="Profile" />
      
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
