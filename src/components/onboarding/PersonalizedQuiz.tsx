'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

interface QuizOption {
  id: string;
  text: string;
  selected: boolean;
}

const PersonalizedQuiz = () => {
  const router = useRouter();
  const [currentQuestion] = useState(4); // Current question number
  const totalQuestions = 10;
  
  const [options, setOptions] = useState<QuizOption[]>([
    { id: '1', text: "Making a meaningful impact on others' lives", selected: false },
    { id: '2', text: 'Continuous learning and skill development', selected: true },
    { id: '3', text: 'Financial stability and high earnings', selected: false },
    { id: '4', text: 'Work-life balance and flexibility', selected: false },
    { id: '5', text: 'Leading and managing teams to achieve goals', selected: false },
  ]);

  const handleOptionToggle = (optionId: string) => {
    setOptions(options.map(option => 
      option.id === optionId 
        ? { ...option, selected: !option.selected }
        : option
    ));
  };

  const handleSkip = () => {
    // Navigate to onboarding complete page after skipping
    router.push('/onboarding/complete');
  };

  const handleNext = () => {
    // In a real app, this would save the answer and go to next question
    // For now, we'll go to onboarding complete page after the quiz
    if (currentQuestion === totalQuestions) {
      router.push('/onboarding/complete');
    } else {
      // Navigate to next question (would be implemented with state management)
      // For demo purposes, navigate to complete page
      router.push('/onboarding/complete');
    }
  };

  const handlePrevious = () => {
    // Navigate to previous question
    console.log('Previous question');
  };

  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-[100px] py-20">
      <div className="w-[520px] flex flex-col items-center justify-center gap-16">
        {/* Progress Bar */}
        <div className="flex items-center gap-4 w-full">
          <div className="flex-1 h-3 bg-[#EDEDED] rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${progressPercentage}%`,
                background: 'linear-gradient(90deg, #D96570 0%, #4A83F0 100%)'
              }}
            />
          </div>
          <span className="text-sm font-normal text-[#1A1A1A] tracking-[-0.02em]">
            {currentQuestion}/{totalQuestions}
          </span>
        </div>

        {/* Quiz Content */}
        <div className="flex flex-col gap-8 w-full">
          {/* Question */}
          <div className="flex flex-col items-center gap-6 w-full">
            <h1 className="text-2xl font-bold text-[#1A1A1A] leading-[1.33] tracking-[-0.02em] text-center max-w-[415px]">
              What motivates you the most when choosing a career?
            </h1>

            {/* Options */}
            <div className="flex flex-col gap-3 w-full">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionToggle(option.id)}
                  className={`flex items-center gap-4 px-8 py-4 rounded-lg transition-all ${
                    option.selected 
                      ? 'bg-[#F6F6F6]' 
                      : 'bg-[#F6F6F6] hover:bg-[#EDEDED]'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-md border flex items-center justify-center transition-all ${
                    option.selected 
                      ? 'bg-[#3D80F8] border-[#3D80F8]' 
                      : 'border-[#D3D3D3] bg-white'
                  }`}>
                    {option.selected && (
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    )}
                  </div>
                  <span className="text-sm font-normal text-[#676767] leading-[1.43] tracking-[-0.02em] text-left flex-1">
                    {option.text}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between w-full">
            {/* Skip Button */}
            <button
              onClick={handleSkip}
              className="px-8 py-4 border border-[#D3D3D3] rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span className="text-base font-bold text-[#1A1A1A] leading-[1.5] tracking-[-0.02em]">
                Skip This Step
              </span>
            </button>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrevious}
                className="p-4 border border-[#D3D3D3] rounded-lg hover:bg-gray-50 transition-colors"
                disabled={currentQuestion === 1}
              >
                <ArrowLeft className="w-6 h-6 text-[#1A1A1A]" strokeWidth={2} />
              </button>
              <button
                onClick={handleNext}
                className="p-4 bg-[#3D80F8] rounded-lg hover:bg-[#2968E5] transition-colors"
              >
                <ArrowRight className="w-6 h-6 text-white" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedQuiz;