import ChallengeCard, { Challenge } from './ChallengeCard';

interface ChallengeGridProps {
  challenges: Challenge[];
  onChallengeClick: (challenge: Challenge) => void;
}

export default function ChallengeGrid({ challenges, onChallengeClick }: ChallengeGridProps) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col gap-4">
        {challenges.map((challenge) => (
          <ChallengeCard 
            key={challenge.id}
            challenge={challenge}
            onButtonClick={onChallengeClick}
            onClick={() => onChallengeClick(challenge)}
          />
        ))}
      </div>
    </div>
  );
}
