export interface CareerData {
  ratings: number[];
  career: string;
}

export const careerData: CareerData[] = [
  // Database Administrator profiles
  { ratings: [9,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], career: "Database Administrator" },
  
  // Hardware Engineer profiles
  { ratings: [7,9,7,7,7,2,7,7,7,7,7,7,7,7,7,7,7], career: "Hardware Engineer" },
  { ratings: [7,9,7,7,7,3,7,7,7,7,7,7,7,7,7,7,7], career: "Hardware Engineer" },
  
  // Application Support Engineer profiles
  { ratings: [7,7,9,7,7,7,6,7,7,7,7,7,7,7,7,7,7], career: "Application Support Engineer" },
  { ratings: [7,7,9,7,7,7,7,7,7,7,7,7,7,7,7,7,7], career: "Application Support Engineer" },
  
  // Additional career profiles
  { ratings: [3,4,5,9,9,6,7,5,9,7,6,6,4,7,5,7,3], career: "Cyber Security Specialist" },
  { ratings: [4,7,8,5,9,7,8,6,6,7,5,7,5,6,4,8,2], career: "Networking Engineer" },
  { ratings: [5,6,6,6,7,9,9,7,5,8,7,9,6,8,7,8,5], career: "Software Developer" },
  { ratings: [6,5,7,5,7,9,9,6,4,8,6,9,5,7,6,7,4], career: "API Integration Specialist" },
  { ratings: [5,4,6,6,6,7,7,9,5,8,6,7,8,9,5,7,4], career: "Project Manager" },
  { ratings: [4,5,5,8,8,6,7,6,9,7,5,6,5,7,4,7,3], career: "Information Security Specialist" },
  { ratings: [5,6,6,5,6,7,7,6,5,9,6,7,7,9,6,6,5], career: "Technical Writer" },
  { ratings: [6,5,6,5,5,7,8,5,4,6,9,7,6,7,9,7,4], career: "AI ML Specialist" },
  { ratings: [5,5,6,4,5,9,8,7,4,7,6,9,7,8,6,8,4], career: "Software Tester" },
  { ratings: [4,4,5,4,5,6,6,8,4,8,5,6,9,9,7,7,5], career: "Business Analyst" },
  { ratings: [3,3,4,3,4,5,5,6,3,8,4,5,7,9,5,7,4], career: "Customer Service Executive" },
  { ratings: [7,5,6,4,4,7,8,5,3,6,8,7,6,7,9,7,5], career: "Data Scientist" },
  { ratings: [4,5,5,5,6,6,7,5,4,7,5,6,5,8,4,9,4], career: "Helpdesk Engineer" },
  { ratings: [3,4,3,2,3,6,6,5,2,7,5,5,6,8,4,6,9], career: "Graphics Designer" }
];

export const skills = [
  "Database Fundamentals",
  "Computer Architecture",
  "Distributed Computer System",
  "Cyber Security",
  "Computer Network",
  "Software Development",
  "Programming Skills",
  "Project Management",
  "Computer Forensic Fundamental",
  "Technical Communication",
  "AI ML",
  "Software Engineering",
  "Business Analytics",
  "Communication Skills",
  "Data Science",
  "Troubleshooting Skills",
  "Graphic Design"
];

export const ratings = [
  { label: "Not Interested", value: 1 },
  { label: "Poor", value: 2 },
  { label: "Beginner", value: 3 },
  { label: "Average", value: 5 },
  { label: "Intermediate", value: 6 },
  { label: "Excellent", value: 7 },
  { label: "Professional", value: 9 }
];