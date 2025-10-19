import {
  Home,
  FileText,
  Users,
  MessageSquare,
  BarChart3,
  Video,
  HelpCircle,
} from "lucide-react";

export const getCourseNavigation = (courseId) => [
  { 
    name: "Home", 
    icon: Home, 
    href: `/courses/${courseId}` 
  },
  { 
    name: "Modules", 
    icon: FileText, 
    href: `/courses/${courseId}/modules` 
  },
  {
    name: "Piazza",
    icon: MessageSquare,
    href: `/courses/${courseId}/piazza`,
  },
  { 
    name: "Zoom Meetings", 
    icon: Video, 
    href: `/courses/${courseId}/zoom` 
  },
  {
    name: "Assignments",
    icon: FileText,
    href: `/courses/${courseId}/assignments`,
  },
  { 
    name: "Quizzes", 
    icon: HelpCircle, 
    href: `/courses/${courseId}/quizzes` 
  },
  { 
    name: "Grades", 
    icon: BarChart3, 
    href: `/courses/${courseId}/grades` 
  },
  { 
    name: "People", 
    icon: Users, 
    href: `/courses/${courseId}/people` 
  },
];
