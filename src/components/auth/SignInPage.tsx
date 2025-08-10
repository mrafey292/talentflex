'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log({ email, password });
    
    // Navigate to dashboard after successful sign in
    router.push('/dashboard');
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign in
    console.log('Google sign in');
    // Navigate to dashboard after successful Google sign in
    router.push('/dashboard');
  };

  const handleLinkedInSignIn = () => {
    // Handle LinkedIn sign in
    console.log('LinkedIn sign in');
    // Navigate to dashboard after successful LinkedIn sign in
    router.push('/dashboard');
  };

  return (
    <div className="flex items-center min-h-screen bg-white">
      {/* Left Section */}
      <div className="flex flex-col items-center justify-center w-[520px] px-8 py-8">
        {/* Header */}
        <div className="flex flex-col items-center gap-8 mb-12">
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
              Sign In
            </h2>
            <p className="text-base font-normal text-[#676767] leading-[1.5] tracking-[-0.02em] text-center">
              Access your account and plan your career
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex flex-col w-full gap-8">
          <div className="flex flex-col items-center gap-4">
            <form onSubmit={handleSubmit} className="flex flex-col w-full gap-8">
              {/* Input Fields */}
              <div className="flex flex-col gap-4">
                {/* Email Input */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#676767] leading-[1.43] tracking-[-0.02em]">
                    Email
                  </label>
                  <div className="flex items-center gap-4 px-4 py-2 border-2 border-[#EDEDED] rounded-[10px]">
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
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="flex items-center justify-center w-full gap-2.5 px-8 py-4 bg-[#3D80F8] rounded-lg"
              >
                <span className="text-base font-bold text-white leading-[1.5] tracking-[-0.02em]">
                  Sign In
                </span>
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center w-full gap-4">
              <div className="flex-1 h-px bg-[#EDEDED]"></div>
              <span className="text-sm font-normal text-[#676767] leading-[1.43] tracking-[-0.02em]">
                or
              </span>
              <div className="flex-1 h-px bg-[#EDEDED]"></div>
            </div>

            {/* Social Sign In Buttons */}
            <div className="flex items-center gap-2">
              {/* Google Button */}
              <button
                onClick={handleGoogleSignIn}
                className="flex items-center gap-2.5 px-3 py-3 border border-[#EDEDED] rounded-full hover:bg-gray-50 transition-colors"
              >
                <div className="w-6 h-6 relative">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.2304C24 11.2467 23.9183 10.5288 23.7415 9.78436H12.245V14.2244H18.9932C18.8572 15.3278 18.1225 16.9896 16.4898 18.1062L16.4669 18.2548L20.1019 21.0063L20.3538 21.0309C22.6666 18.9437 24 15.8729 24 12.2304Z" fill="#4285F4"/>
                    <path d="M12.245 23.929C15.551 23.929 18.3265 22.8655 20.3538 21.031L16.4898 18.1063C15.4558 18.8109 14.0681 19.3027 12.245 19.3027C9.00694 19.3027 6.25869 17.2157 5.27901 14.3309L5.13541 14.3428L1.3557 17.201L1.30628 17.3353C3.31984 21.2436 7.45587 23.929 12.245 23.929Z" fill="#34A853"/>
                    <path d="M5.27881 14.3305C5.02032 13.5861 4.87072 12.7884 4.87072 11.9642C4.87072 11.1399 5.02032 10.3423 5.26521 9.59791L5.25837 9.43936L1.43129 6.53528L1.30608 6.59348C0.476192 8.21534 0 10.0366 0 11.9642C0 13.8918 0.476192 15.713 1.30608 17.3348L5.27881 14.3305Z" fill="#FBBC05"/>
                    <path d="M12.245 4.62619C14.5442 4.62619 16.0952 5.59663 16.9796 6.40761L20.4353 3.11074C18.313 1.18315 15.551 0 12.245 0C7.45587 0 3.31984 2.68532 1.30628 6.59365L5.26541 9.59808C6.25869 6.71334 9.00694 4.62619 12.245 4.62619Z" fill="#EB4335"/>
                  </svg>
                </div>
              </button>

              {/* LinkedIn Button */}
              <button
                onClick={handleLinkedInSignIn}
                className="flex items-center gap-2.5 px-3 py-3 border border-[#EDEDED] rounded-full hover:bg-gray-50 transition-colors"
              >
                <div className="w-6 h-6 relative">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#007AB9"/>
                    <path d="M19.1698 12.9656V17.9129H16.3014V13.2971C16.3014 12.1382 15.8873 11.3467 14.8488 11.3467C14.0562 11.3467 13.5854 11.8796 13.3775 12.3955C13.302 12.5799 13.2825 12.836 13.2825 13.0946V17.9127H10.4139C10.4139 17.9127 10.4525 10.0951 10.4139 9.28588H13.2827V10.5084C13.2769 10.518 13.2688 10.5274 13.2637 10.5366H13.2827V10.5084C13.6639 9.92184 14.3437 9.0833 15.8678 9.0833C17.755 9.0833 19.1698 10.3163 19.1698 12.9656ZM7.4132 5.12744C6.43199 5.12744 5.79004 5.77153 5.79004 6.61776C5.79004 7.44603 6.41338 8.10872 7.37555 8.10872H7.39416C8.39462 8.10872 9.01668 7.44603 9.01668 6.61776C8.99764 5.77153 8.39462 5.12744 7.4132 5.12744ZM5.96053 17.9129H8.82801V9.28588H5.96053V17.9129Z" fill="#F1F2F2"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="flex items-center justify-center gap-2 w-full">
            <span className="text-sm font-normal text-[#676767] leading-[1.43] tracking-[-0.02em]">
              Didn't have an account?
            </span>
            <Link 
              href="/signup" 
              className="text-sm font-bold text-[#3D80F8] leading-[1.43] tracking-[-0.02em] hover:underline"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Right Section - Background Image */}
      <div 
        className="flex-1 h-screen bg-[#EDEDED] rounded-2xl"
        style={{
          backgroundImage: 'url(/assets/signin-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
    </div>
  );
};

export default SignInPage;