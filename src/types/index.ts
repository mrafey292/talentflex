export interface User {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface TodoItem {
  id: string;
  title: string;
  category: 'Course' | 'Challenge' | 'Job';
  time: string;
  iconType: 'book-open' | 'color-swatch' | 'briefcase';
  iconBg: string;
}

export interface JobCard {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  salary: string;
  period: string;
  tags: string[];
  isHighMatch?: boolean;
  safetyVerified?: boolean;
  backgroundImage?: string;
}

export interface SkillCourse {
  id: string;
  title: string;
  description: string;
  instructor: string;
  instructorAvatar: string;
  duration: string;
  progress: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  backgroundImage?: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  status: 'On Progress' | 'To Do' | 'Completed';
  statusColor: string;
  backgroundImage?: string;
}

export interface AITool {
  id: string;
  name: string;
  description: string;
  pricing: string;
  rating: number;
  logo: React.ReactNode;
  backgroundColor: string;
}
