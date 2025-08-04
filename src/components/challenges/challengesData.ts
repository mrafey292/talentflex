import { Challenge } from './ChallengeCard';

export const challengesData: Challenge[] = [
  {
    id: '1',
    title: 'Logo Redesign Challenge',
    description: 'Redesign an existing logo with a fresh, creative twist while keeping its core identity. A fun way to sharpen your branding skills and boost your portfolio!',
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=160&h=160&fit=crop&crop=center',
    status: 'On Progress',
    participants: 287,
    reward: 200,
    buttonText: 'Upload Project'
  },
  {
    id: '2',
    title: 'Web Design Challenge',
    description: 'Create a modern and responsive website design that showcases excellent user experience and visual appeal for a tech startup.',
    imageUrl: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=160&h=160&fit=crop&crop=center',
    status: 'Completed',
    participants: 194,
    reward: 350,
    buttonText: 'View Results'
  },
  {
    id: '3',
    title: 'Mobile App UI Challenge',
    description: 'Design an intuitive and beautiful mobile application interface that focuses on user engagement and modern design principles.',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=160&h=160&fit=crop&crop=center',
    status: 'On Progress',
    participants: 156,
    reward: 275,
    buttonText: 'Upload Project'
  },
  {
    id: '4',
    title: 'Brand Identity Challenge',
    description: 'Develop a complete brand identity package including logo, color palette, typography, and brand guidelines for a sustainable fashion brand.',
    imageUrl: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=160&h=160&fit=crop&crop=center',
    status: 'Completed',
    participants: 203,
    reward: 400,
    buttonText: 'View Results'
  },
  {
    id: '5',
    title: 'Icon Design Challenge',
    description: 'Create a cohesive set of 20 custom icons that represent different categories in a productivity application with a clean, modern style.',
    imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=160&h=160&fit=crop&crop=center',
    status: 'Available',
    participants: 89,
    reward: 150,
    buttonText: 'Join Challenge'
  },
  {
    id: '6',
    title: 'Dashboard Design Challenge',
    description: 'Design a comprehensive analytics dashboard that displays complex data in an intuitive and visually appealing way for business users.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=160&h=160&fit=crop&crop=center',
    status: 'Available',
    participants: 112,
    reward: 325,
    buttonText: 'Join Challenge'
  }
];

export const filterChallenges = (challenges: Challenge[], searchQuery: string): Challenge[] => {
  if (!searchQuery.trim()) {
    return challenges;
  }
  
  const query = searchQuery.toLowerCase();
  return challenges.filter(challenge => 
    challenge.title.toLowerCase().includes(query) ||
    challenge.description.toLowerCase().includes(query) ||
    challenge.status.toLowerCase().includes(query)
  );
};
