export const assignmentsData = {
  1: [
    { 
      id: "A1", 
      title: "A1 - HTML and CSS Basics", 
      dueDate: "Sep 28 at 11:59pm", 
      points: 100,
      availableFrom: "Sep 20 at 12:00am",
      description: "Introduction to HTML and CSS fundamentals",
    },
    { 
      id: "A2", 
      title: "A2 - Advanced CSS and Bootstrap", 
      dueDate: "Oct 6 at 11:59pm", 
      points: 375,
      availableFrom: "Sep 30 at 12:00am",
      description: "This is assignment 2 description.",
    },
  ],
  2: [
    { 
      id: "A1", 
      title: "A1 - HTML and CSS Basics", 
      dueDate: "Sep 28 at 11:59pm", 
      points: 100,
      availableFrom: "Sep 20 at 12:00am",
      description: "Introduction to HTML and CSS fundamentals",
    },
    { 
      id: "A2", 
      title: "A2 - Advanced CSS and Bootstrap", 
      dueDate: "Oct 6 at 11:59pm", 
      points: 375,
      availableFrom: "Sep 30 at 12:00am",
      description: "This is assignment 2 description.",
    },
  ],
};

export const getAssignmentsByCourseId = (courseId) => {
  return assignmentsData[courseId] || [];
};

export const getAssignmentById = (courseId, assignmentId) => {
  const assignments = assignmentsData[courseId] || [];
  return assignments.find(assignment => assignment.id === assignmentId);
};

export const assignmentFormDefaults = {
  assignmentName: "",
  description: "",
  points: 100,
  assignmentGroup: "ASSIGNMENTS",
  displayGradeAs: "Percentage",
  submissionType: "Online",
  onlineEntryOptions: ["Website URL"],
  dueDate: "",
  availableFrom: "",
  until: "",
};

export const assignmentGroupOptions = [
  "ASSIGNMENTS",
  "QUIZZES",
  "EXAMS",
  "PROJECT",
];

export const displayGradeOptions = [
  "Percentage",
  "Points",
  "Letter Grade",
  "Complete/Incomplete",
];

export const submissionTypeOptions = [
  "Online",
  "On Paper",
  "No Submission",
  "External Tool",
];

export const onlineEntryOptionsData = [
  "Text Entry",
  "Website URL",
  "Media Recordings",
  "File Uploads",
];
