'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log({ email, password, agreeToTerms });
    
    // Navigate to onboarding quiz after successful sign up
    router.push('/onboarding/quiz');
  };

  return (
    <div className="flex items-center min-h-screen bg-white">
      {/* Left Section */}
      <div className="flex flex-col items-center justify-center w-[520px] px-8 py-8">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-12">
          {/* Logo */}
          <div className="relative w-56 h-16 flex items-center justify-center">
            <h1 
              className="text-4xl font-bold"
              style={{
                background: 'linear-gradient(135deg, #D96570 0%, #4A83F0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.05em'
              }}
            >
              Talent Flex
            </h1>
          </div>
          
          {/* Title and Description */}
          <div className="flex flex-col items-center gap-4 w-[314px]">
            <h2 className="text-[32px] font-bold text-[#1A1A1A] leading-[1.25] tracking-[-0.02em] text-center">
              Create Your Account
            </h2>
            <p className="text-lg font-normal text-[#676767] leading-[1.44] tracking-[-0.02em] text-center">
              Sign up and get started!
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex flex-col w-full gap-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#676767] leading-[1.43] tracking-[-0.02em]">
                Email
              </label>
              <div className="flex items-end gap-4 px-4 py-2 border-2 border-[#EDEDED] rounded-[10px]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 text-base font-normal text-[#ACACAF] leading-[1.5] tracking-[-0.02em] bg-transparent border-none outline-none placeholder:text-[#ACACAF]"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#676767] leading-[1.43] tracking-[-0.02em]">
                Password
              </label>
              <div className="flex items-center gap-4 px-4 py-2 border-2 border-[#EDEDED] rounded-[10px]">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="flex-1 text-base font-normal text-[#ACACAF] leading-[1.5] tracking-[-0.02em] bg-transparent border-none outline-none placeholder:text-[#ACACAF]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="w-6 h-6 flex items-center justify-center"
                >
                  {showPassword ? (
                    <Eye className="w-5 h-5 text-[#676767]" strokeWidth={2} />
                  ) : (
                    <EyeOff className="w-5 h-5 text-[#676767]" strokeWidth={2} />
                  )}
                </button>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center gap-4 w-[312px]">
              <div 
                className="w-7 h-7 border border-[#D3D3D3] rounded-[6px] flex items-center justify-center cursor-pointer"
                onClick={() => setAgreeToTerms(!agreeToTerms)}
              >
                {agreeToTerms && (
                  <div className="w-4 h-4 bg-[#3D80F8] rounded-sm"></div>
                )}
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <span className="text-sm font-normal text-[#676767] leading-[1.43] tracking-[-0.02em]">
                  I agree to all the Terms & Conditions
                </span>
              </div>
            </div>
          </form>

          {/* Sign Up Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="flex items-center justify-center w-full gap-2.5 px-8 py-4 bg-[#3D80F8] rounded-lg"
          >
            <span className="text-base font-bold text-white leading-[1.5] tracking-[-0.02em]">
              Sign Up
            </span>
          </button>

          {/* Sign In Link */}
          <div className="flex items-center justify-center gap-2 w-full">
            <span className="text-sm font-normal text-[#676767] leading-[1.43] tracking-[-0.02em]">
              Already have an account?
            </span>
            <Link 
              href="/signin" 
              className="text-sm font-bold text-[#3D80F8] leading-[1.43] tracking-[-0.02em] hover:underline"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Right Section - Background Image */}
      <div 
        className="flex-1 h-screen bg-[#EDEDED] rounded-2xl"
        style={{
          backgroundImage: 'url(/assets/signup-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
    </div>
  );
};

export default SignUpPage;