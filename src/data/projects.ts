
import { Code, Brain, Users } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github: string;
  projectLink: string;
  icon: LucideIcon;
  features: string[];
  outcome: string;
}

export const projects: Project[] = [
  {
    title: 'Smart Student Attendance System',
    description: 'A full-cycle Human-Computer Interaction (HCI) project focused on solving real-world attendance tracking issues in academic institutions.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    techStack: ['Figma', 'Python', 'Flask', 'React.js', 'MySQL', 'Firebase', 'Chart.js'],
    github: 'https://github.com/example/smart-attendance',
    projectLink: 'https://smart-attendance-demo.vercel.app',
    icon: Code,
    features: [
      'Role-based dashboards',
      'QR/Biometric attendance marking',
      'Real-time notifications',
      'Analytics & reporting'
    ],
    outcome: 'Delivered a working prototype that significantly improves attendance tracking user experience.'
  },
  {
    title: 'Education & Employment Portal',
    description: 'A comprehensive portal connecting students and employers with real-time job and course listings.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    techStack: ['HTML', 'CSS', 'PHP', 'SQL', 'Firebase'],
    github: 'https://github.com/example/edu-employment-portal',
    projectLink: 'https://edu-employment-portal.vercel.app',
    icon: Users,
    features: [
      'Secure login system',
      'Real-time job listings',
      'Course information',
      'Event planning tools'
    ],
    outcome: 'Increased student-employer engagement by 20%.'
  }
];
