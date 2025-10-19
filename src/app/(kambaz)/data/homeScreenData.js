export const homeScreenModulesData = {
  1: [
    {
      id: 1,
      title: "Resources",
      items: [
        { type: "link", title: "Syllabus", icon: "🔗", href: "#" },
        { type: "document", title: "Office Hours", href: "#" },
        { type: "document", title: "Piazza Hours", href: "#" },
        { type: "link", title: "Piazza", icon: "🔗", href: "#" },
        { type: "document", title: "Final Project", href: "#" },
        { type: "link", title: "WebDev TA", icon: "🔗", href: "#" },
      ],
    },
    {
      id: 2,
      title: "GITHUB",
      items: [
        { type: "link", title: "Jose's GitHub username: jannunzi", icon: "🔗", href: "https://github.com/jannunzi" },
      ],
    },
    {
      id: 3,
      title: "TEXTBOOK",
      items: [
        {
          type: "link",
          title: "Developing Full Stack Next.js Web Applications",
          icon: "🔗",
          href: "#",
        },
      ],
    },
  ],
  2: [
    {
      id: 1,
      title: "Resources",
      items: [
        { type: "link", title: "Syllabus", icon: "🔗", href: "#" },
        { type: "document", title: "Office Hours", href: "#" },
        { type: "document", title: "Piazza Hours", href: "#" },
        { type: "link", title: "Piazza", icon: "🔗", href: "#" },
        { type: "document", title: "Final Project", href: "#" },
        { type: "link", title: "WebDev TA", icon: "🔗", href: "#" },
      ],
    },
    {
      id: 2,
      title: "GITHUB",
      items: [
        { type: "link", title: "Jose's GitHub username: jannunzi", icon: "🔗", href: "https://github.com/jannunzi" },
      ],
    },
    {
      id: 3,
      title: "TEXTBOOK",
      items: [
        {
          type: "link",
          title: "Developing Full Stack Next.js Web Applications",
          icon: "🔗",
          href: "#",
        },
      ],
    },
  ],
};

export const todoItemsData = {
  1: [
    {
      id: 1,
      title: "Q6",
      points: 18,
      dueDate: "Nov 10 at 11:59pm",
    },
    {
      id: 2,
      title: "Lecture Wed 05 & 07",
      dueDate: "Nov 12 at 3pm",
    },
    {
      id: 3,
      title: "Assignment 1",
      dueDate: "Nov 14 at 1pm",
    },
    {
      id: 4,
      title: "Quiz 3",
      dueDate: "Nov 14 at 2pm",
    },
  ],
  2: [
    {
      id: 1,
      title: "Q6",
      points: 18,
      dueDate: "Nov 10 at 11:59pm",
    },
    {
      id: 2,
      title: "Lecture Wed 05 & 07",
      dueDate: "Nov 12 at 3pm",
    },
    {
      id: 3,
      title: "Assignment 1",
      dueDate: "Nov 14 at 1pm",
    },
    {
      id: 4,
      title: "Quiz 3",
      dueDate: "Nov 14 at 2pm",
    },
  ],
};

export const recentFeedbackData = {
  1: [
    { id: 1, title: "Q2", score: "22 out of 23" },
    { id: 2, title: "Q1", score: "27 out of 29" },
    { id: 3, title: "A1", score: "99.68%" },
  ],
  2: [
    { id: 1, title: "Q2", score: "22 out of 23" },
    { id: 2, title: "Q1", score: "27 out of 29" },
    { id: 3, title: "A1", score: "99.68%" },
  ],
};

export const getHomeScreenModules = (courseId) => {
  return homeScreenModulesData[courseId] || [];
};

export const getTodoItems = (courseId) => {
  return todoItemsData[courseId] || [];
};

export const getRecentFeedback = (courseId) => {
  return recentFeedbackData[courseId] || [];
};
