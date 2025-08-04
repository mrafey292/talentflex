export interface AITool {
  id: string;
  name: string;
  description: string;
  rating: number;
  pricing: string;
  category: "Agents" | "Tools";
  backgroundColor: string;
  logo?: string;
}

export const aiTools: AITool[] = [
  {
    id: "resume-genie",
    name: "ResumeGenie",
    description: "Create optimized resumes and cover letters in minutes with AI-powered suggestions",
    rating: 4.7,
    pricing: "$12",
    category: "Agents",
    backgroundColor: "#EFF5FF"
  },
  {
    id: "career-bot", 
    name: "CareerBot",
    description: "Your personal AI career coach that helps tailor your resume, find job matches, and prep for interviews",
    rating: 4.9,
    pricing: "Free - $30",
    category: "Agents",
    backgroundColor: "#E2E7ED"
  },
  {
    id: "pathfinder-ai",
    name: "PathFinder AI", 
    description: "An intelligent agent that analyzes your skills and goals to recommend ideal career paths and opportunities",
    rating: 4.7,
    pricing: "$9.99",
    category: "Agents",
    backgroundColor: "#EFF5FF"
  },
  {
    id: "jobmatch-ai",
    name: "JobMatch AI",
    description: "Scan job boards in seconds and get personalized job suggestions based on your profile and preferences", 
    rating: 4.7,
    pricing: "$9.99",
    category: "Agents",
    backgroundColor: "#FFEAEA"
  },
  {
    id: "canva-ai",
    name: "Canva AI (Magic Design)",
    description: "Instantly generate design templates with AI",
    rating: 4.9,
    pricing: "Free - $30",
    category: "Tools", 
    backgroundColor: "#EFF5FF"
  },
  {
    id: "remove-bg",
    name: "Remove.bg",
    description: "Instantly remove image backgrounds with AI precision",
    rating: 4.5,
    pricing: "Free - $9.99",
    category: "Tools",
    backgroundColor: "#F6F6F6"
  },
  {
    id: "adobe-sensei",
    name: "Adobe Sensei",
    description: "AI-powered design enhancements and automation",
    rating: 4.7,
    pricing: "Included with Adobe CC",
    category: "Tools",
    backgroundColor: "#FEF6F5"
  },
  {
    id: "chat-gpt",
    name: "Chat GPT",
    description: "Generate AI-powered design ideas, prompts, and image concepts",
    rating: 4.5,
    pricing: "Free - $20",
    category: "Tools",
    backgroundColor: "#F6F6F6"
  }
];
