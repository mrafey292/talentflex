"use client";

import { useRouter } from "next/navigation";

export default function Schedule() {
  const router = useRouter();
  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'
  ];

  const days = [
    { short: 'Mon', date: '16/04' },
    { short: 'Tue', date: '17/04' },
    { short: 'Wed', date: '18/04' },
    { short: 'Thu', date: '19/04' },
    { short: 'Fri', date: '20/04' },
    { short: 'Sat', date: '21/04' },
    { short: 'Sun', date: '22/04' }
  ];

  const events = [
    { title: 'Logo Redesign Challenge', type: 'Challenge', position: { top: 72, height: 64, left: 46 } },
    { title: 'Graphic Design Fundamentals', type: 'Course', position: { top: 72, height: 64, left: 237 } },
    { title: 'Moonlight Creatives', type: 'Interview', position: { top: 8, height: 64, left: 333 } },
    { title: 'Logo Redesign Challenge', type: 'Challenge', position: { top: 8, height: 64, left: 524 } },
    { title: 'Graphic Design Fundamentals', type: 'Course', position: { top: 8, height: 64, left: 142 } },
    { title: 'Logo Redesign Challenge', type: 'Challenge', position: { top: 136, height: 64, left: 237 } },
    { title: 'Graphic Design Fundamentals', type: 'Course', position: { top: 72, height: 64, left: 429 } },
    { title: 'Creative Vision', type: 'Interview', position: { top: 200, height: 64, left: 428 } }
  ];

  return (
    <div className="bg-white border border-[#EDEDED] rounded-3xl p-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-[#1A1A1A]">Roadmap/Sprint</h2>
            <div className="flex bg-[#EDEDED] rounded-lg p-1">
              <button className="bg-white text-[#1A1A1A] font-bold text-xs px-3 py-1 rounded">
                Weekly
              </button>
              <button className="text-[#676767] text-xs px-3 py-1">
                Monthly
              </button>
            </div>
          </div>
          <button 
            onClick={() => router.push('/roadmap')}
            className="text-sm text-[#676767] hover:text-[#1A1A1A] transition-colors"
          >
            View All
          </button>
        </div>

        {/* Schedule Grid */}
        <div className="relative">
          {/* Day Headers */}
          <div className="flex gap-2 mb-2">
            <div className="w-8"></div> {/* Spacer for time column */}
            {days.map((day, index) => (
              <div key={index} className="flex-1 text-center">
                <div className="text-sm font-bold text-[#1A1A1A]">{day.short}</div>
                <div className="text-xs text-[#676767]">{day.date}</div>
              </div>
            ))}
          </div>

          {/* Time Grid */}
          <div className="relative min-h-[400px]">
            {/* Time Labels */}
            <div className="absolute left-0 top-0 space-y-12">
              {timeSlots.map((time, index) => (
                <div key={index} className="text-xs text-[#676767] w-8 h-4">
                  {time}
                </div>
              ))}
            </div>

            {/* Grid Lines */}
            <div className="absolute left-12 top-0 right-0">
              {/* Horizontal lines */}
              {timeSlots.map((_, index) => (
                <div 
                  key={index} 
                  className="absolute border-t border-[#D3D3D3] w-full"
                  style={{ top: `${index * 48 + 8}px` }}
                />
              ))}
              
              {/* Vertical lines */}
              {Array.from({ length: 8 }, (_, index) => (
                <div 
                  key={index} 
                  className="absolute border-l border-[#D3D3D3] h-full"
                  style={{ left: `${(index / 7) * 100}%` }}
                />
              ))}
            </div>

            {/* Events */}
            <div className="absolute left-12 top-0 right-0">
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`absolute rounded-lg p-2 text-xs font-bold text-[#1A1A1A] ${
                    event.type === 'Course' ? 'bg-[#E2ECFF]' :
                    event.type === 'Challenge' ? 'bg-[#F6F6F6]' :
                    'bg-[#C5DAFF]'
                  }`}
                  style={{
                    top: `${event.position.top}px`,
                    height: `${event.position.height}px`,
                    left: `${(event.position.left / 712) * 100}%`,
                    width: '13.5%'
                  }}
                >
                  <div className="truncate">{event.title}</div>
                  <div className="text-[#676767] text-[10px]">{event.type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
