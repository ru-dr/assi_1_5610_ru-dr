export const modulesData = {
  1: [
    {
      id: 1,
      title: "Week 0 - INTRO",
      status: "Completed",
      lessons: [
        {
          id: 1,
          type: "assignment",
          title: "LEARNING MODULE",
          points: 0,
          due: null,
        },
        {
          id: 2,
          type: "assignment",
          title: "LEARNING OBJECTIVES",
          points: 0,
          due: null,
        },
        {
          id: 3,
          type: "reading",
          title: "READING",
          points: 0,
          due: null,
        },
        {
          id: 4,
          type: "assignment",
          title: "SLIDES",
          points: 0,
          due: null,
        },
      ],
    },
    {
      id: 2,
      title: "Week 1 - COURSE INTRO, HTML, CSS, BOOTSTRAP",
      status: "Completed",
      lessons: [
        {
          id: 5,
          type: "assignment",
          title: "LEARNING OBJECTIVES",
          points: 0,
          due: null,
        },
        {
          id: 6,
          type: "reading",
          title: "READING",
          points: 0,
          due: null,
        },
        {
          id: 7,
          type: "assignment",
          title: "SLIDES",
          points: 0,
          due: null,
        },
        {
          id: 8,
          type: "assignment",
          title: "HTML",
          points: 0,
          due: null,
        },
        {
          id: 9,
          type: "assignment",
          title: "CSS",
          points: 0,
          due: null,
        },
      ],
    },
    {
      id: 3,
      title: "Week 2 - FORMATTING USER INTERFACES WITH HTML AND CSS",
      status: "In Progress",
      lessons: [
        {
          id: 10,
          type: "assignment",
          title: "LEARNING OBJECTIVES",
          points: 0,
          due: null,
        },
        {
          id: 11,
          type: "reading",
          title: "LESSON",
          points: 0,
          due: null,
        },
      ],
    },
  ],
  2: [
    {
      id: 1,
      title: "Week 0 - INTRO",
      status: "Completed",
      lessons: [
        {
          id: 1,
          type: "assignment",
          title: "LEARNING MODULE",
          points: 0,
          due: null,
        },
        {
          id: 2,
          type: "assignment",
          title: "LEARNING OBJECTIVES",
          points: 0,
          due: null,
        },
        {
          id: 3,
          type: "reading",
          title: "READING",
          points: 0,
          due: null,
        },
        {
          id: 4,
          type: "assignment",
          title: "SLIDES",
          points: 0,
          due: null,
        },
      ],
    },
    {
      id: 2,
      title: "Week 1 - COURSE INTRO, HTML, CSS, BOOTSTRAP",
      status: "Completed",
      lessons: [
        {
          id: 5,
          type: "assignment",
          title: "LEARNING OBJECTIVES",
          points: 0,
          due: null,
        },
        {
          id: 6,
          type: "reading",
          title: "READING",
          points: 0,
          due: null,
        },
        {
          id: 7,
          type: "assignment",
          title: "SLIDES",
          points: 0,
          due: null,
        },
        {
          id: 8,
          type: "assignment",
          title: "HTML",
          points: 0,
          due: null,
        },
        {
          id: 9,
          type: "assignment",
          title: "CSS",
          points: 0,
          due: null,
        },
      ],
    },
    {
      id: 3,
      title: "Week 2 - FORMATTING USER INTERFACES WITH HTML AND CSS",
      status: "In Progress",
      lessons: [
        {
          id: 10,
          type: "assignment",
          title: "LEARNING OBJECTIVES",
          points: 0,
          due: null,
        },
        {
          id: 11,
          type: "reading",
          title: "LESSON",
          points: 0,
          due: null,
        },
      ],
    },
  ],
};

export const getModulesByCourseId = (courseId) => {
  return modulesData[courseId] || [];
};
