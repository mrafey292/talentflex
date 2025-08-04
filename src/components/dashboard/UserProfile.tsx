"use client";

import Image from "next/image";

export default function UserProfile() {
  return (
    <div className="border border-[#EDEDED] rounded-3xl p-6 space-y-6">
      {/* Profile Section */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-[165px] h-[165px] rounded-full overflow-hidden">
          <Image
            src="/images/avatar-1.png"
            alt="John Carl"
            width={165}
            height={165}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold text-[#1A1A1A]">John Carl</h3>
          <p className="text-sm text-[#676767]">Graphic Designer</p>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="bg-white border border-[#EDEDED] rounded-2xl p-3">
        <div className="space-y-2">
          {/* Date Selector */}
          <div className="flex justify-between items-center bg-[#F6F6F6] rounded-lg p-2">
            <button className="w-6 h-6 bg-white rounded shadow-sm flex items-center justify-center">
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                <path d="M5 9L1 5L5 1" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <span className="text-sm font-semibold text-[#1A1A1A]">Aug, 2023</span>
            <button className="w-6 h-6 bg-white rounded shadow-sm flex items-center justify-center">
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                <path d="M1 9L5 5L1 1" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Day Labels */}
          <div className="grid grid-cols-7 gap-2 text-center">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
              <div key={index} className="text-sm font-semibold text-[#969699] py-1">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 text-center">
            {/* Previous month days */}
            {[26, 27, 28, 29, 30, 31].map((day) => (
              <div key={day} className="text-sm text-[#D3D3D3] py-1">
                {day}
              </div>
            ))}
            <div className="text-sm text-[#1A1A1A] py-1">1</div>

            {/* Current month days */}
            {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((day) => (
              <div key={day} className="text-sm text-[#1A1A1A] py-1">
                {day}
              </div>
            ))}
            <div className="bg-[#3D80F8] text-white text-sm rounded-lg py-1">11</div>
            {[12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((day) => (
              <div key={day} className="text-sm text-[#1A1A1A] py-1">
                {day}
              </div>
            ))}

            {/* Next month days */}
            {[1, 2, 3, 4, 5].map((day) => (
              <div key={day} className="text-sm text-[#D3D3D3] py-1">
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
