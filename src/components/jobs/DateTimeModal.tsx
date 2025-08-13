"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface DateTimeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (date: Date) => void;
}

export default function DateTimeModal({ isOpen, onClose, onConfirm }: DateTimeModalProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date(2023, 7)); // August 2023 as in design
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2023, 7, 11)); // 11th selected by default

  if (!isOpen) return null;

  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  // Get days from previous month to fill the first week
  const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0);
  const daysInPrevMonth = prevMonth.getDate();
  const startDay = firstDayOfMonth === 0 ? 0 : firstDayOfMonth - 1; // Adjust for Monday start

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleDateClick = (day: number, isCurrentMonth: boolean = true) => {
    if (isCurrentMonth) {
      setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day));
    }
  };

  const handleConfirm = () => {
    if (selectedDate) {
      onConfirm(selectedDate);
      onClose();
    }
  };

  const renderCalendarDays = () => {
    const days = [];
    
    // Days from previous month
    for (let i = startDay; i > 0; i--) {
      const day = daysInPrevMonth - i + 1;
      days.push(
        <button
          key={`prev-${day}`}
          className="h-10 w-full rounded-lg flex items-center justify-center text-sm text-[#D3D3D3] cursor-default"
          disabled
        >
          {day}
        </button>
      );
    }
    
    // Days of current month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const isSelected = 
        selectedDate &&
        date.getDate() === selectedDate.getDate() &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear();
      
      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(day)}
          className={`
            h-10 w-full rounded-lg flex items-center justify-center text-sm transition-colors
            ${isSelected 
              ? 'bg-[#3D80F8] text-white font-medium' 
              : 'text-[#1A1A1A] hover:bg-[#F6F6F6] cursor-pointer'
            }
          `}
        >
          {day}
        </button>
      );
    }
    
    // Days from next month to complete the grid
    const totalCells = days.length;
    const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
    for (let day = 1; day <= remainingCells; day++) {
      days.push(
        <button
          key={`next-${day}`}
          className="h-10 w-full rounded-lg flex items-center justify-center text-sm text-[#D3D3D3] cursor-default"
          disabled
        >
          {day}
        </button>
      );
    }
    
    return days;
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl p-8 w-[520px]">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#1A1A1A] tracking-[-0.02em]">
              Schedule Your Interview
            </h2>
            <button
              onClick={onClose}
              className="w-6 h-6 flex items-center justify-center"
            >
              <X className="w-6 h-6 text-[#676767]" strokeWidth={2} />
            </button>
          </div>
          
          {/* Calendar Container */}
          <div className="border border-[#EDEDED] rounded-xl p-3 mb-8">
            {/* Month Navigation */}
            <div className="flex items-center justify-between bg-[#F6F6F6] rounded-lg p-1.5 mb-2">
              <button
                onClick={handlePrevMonth}
                className="w-6 h-6 bg-white rounded-md shadow-sm flex items-center justify-center hover:shadow-md transition-shadow"
              >
                <ChevronLeft className="w-4 h-4 text-[#1A1A1A]" strokeWidth={2} />
              </button>
              <span className="text-sm font-semibold text-[#1A1A1A] tracking-[-0.02em]">
                {monthNames[currentMonth.getMonth()]}, {currentMonth.getFullYear()}
              </span>
              <button
                onClick={handleNextMonth}
                className="w-6 h-6 bg-white rounded-md shadow-sm flex items-center justify-center hover:shadow-md transition-shadow"
              >
                <ChevronRight className="w-4 h-4 text-[#1A1A1A]" strokeWidth={2} />
              </button>
            </div>
            
            {/* Weekday Headers */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                <div key={index} className="text-center text-sm font-semibold text-[#969699] py-1">
                  {day}
                </div>
              ))}
            </div>
            
            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {renderCalendarDays()}
            </div>
          </div>
          
          {/* Set Schedule Button */}
          <button
            onClick={handleConfirm}
            className="w-full bg-[#3D80F8] text-white font-bold text-base py-4 rounded-lg hover:bg-blue-600 transition-colors tracking-[-0.02em]"
          >
            Set Schedule
          </button>
        </div>
      </div>
    </>
  );
}