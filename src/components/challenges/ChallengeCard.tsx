import { UsersIcon } from '@heroicons/react/24/outline';

export interface Challenge {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  status: 'On Progress' | 'Completed' | 'Available';
  participants: number;
  reward: number;
  buttonText: string;
}

interface ChallengeCardProps {
  challenge: Challenge;
  onButtonClick: (challenge: Challenge) => void;
  onClick?: () => void;
}

export default function ChallengeCard({ challenge, onButtonClick, onClick }: ChallengeCardProps) {
  const getStatusColor = (status: Challenge['status']) => {
    switch (status) {
      case 'On Progress':
        return 'bg-[#EFF5FF] text-[#3D80F8]';
      case 'Completed':
        return 'bg-[#E8FBEB] text-[#229A1B]';
      case 'Available':
        return 'bg-[#EDEDED] text-[#1A1A1A]';
      default:
        return 'bg-[#EDEDED] text-[#1A1A1A]';
    }
  };

  return (
    <div 
      className="bg-white border border-[#EDEDED] rounded-2xl p-4 hover:shadow-lg transition-shadow relative flex items-center gap-4 w-[800px] cursor-pointer"
      onClick={onClick}
    >
      {/* Image Section */}
      <div className="w-40 h-40 rounded-xl overflow-hidden flex-shrink-0">
        <img 
          src={challenge.imageUrl} 
          alt={challenge.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-between h-40 py-2">
        {/* Header Section */}
        <div className="flex flex-col gap-2">
          <span className={`inline-flex items-center px-3 py-1.5 rounded text-xs font-normal w-fit ${getStatusColor(challenge.status)}`}>
            {challenge.status}
          </span>
          
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-base text-black leading-tight">{challenge.title}</h3>
            <p className="text-sm text-[#676767] leading-tight h-10 overflow-hidden">
              {challenge.description}
            </p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UsersIcon className="w-5 h-5 text-[#B5B5B5]" />
            <span className="text-xs text-[#676767]">{challenge.participants} Participants</span>
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onButtonClick(challenge);
            }}
            className="px-6 py-3 border border-[#D3D3D3] text-sm font-bold text-[#1A1A1A] rounded-lg hover:bg-gray-50 transition-colors"
          >
            {challenge.buttonText}
          </button>
        </div>
      </div>

      {/* Reward Badge */}
      <div className="absolute -top-2 -right-2 bg-[#3D80F8] text-white px-2 py-1 rounded text-sm flex items-center gap-1">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        <span className="text-sm font-medium">${challenge.reward}</span>
      </div>
    </div>
  );
}
