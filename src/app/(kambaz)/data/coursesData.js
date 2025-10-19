export const coursesData = [
  {
    id: "1",
    code: "CS5010",
    name: "Program Design Paradigm",
    fullName: "CS5010.MERGED.202610",
    title: "CS5010 Program Design Paradigm",
    term: "202610_1 Fall 2025 Semester Full Term",
    color: "bg-blue-500",
    image: null,
    instructor: "Prof. Johnson",
  },
  {
    id: "2",
    code: "CS5610 18616",
    name: "Web Development",
    fullName: "CS5610.18616.202610",
    title: "CS5610 18616 Web Development SEC 04 Fall 2025 [BOS-1-TR]",
    term: "202610_1 Fall 2025 Semester Full Term",
    color: "bg-purple-900",
    image: null,
    instructor: "Prof. Smith",
  },
  {
    id: "3",
    code: "Fall 2025",
    name: "Career Preparation/Co-op",
    fullName: "Career.Prep.Coop.Success,FA...",
    title: "Career Preparation and Co-op Success",
    term: "Group Courses",
    color: null,
    image:
      "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=400&h=200&fit=crop",
    instructor: "Career Services",
  },
  {
    id: "4",
    code: "Khoury College",
    name: "New Master's Student",
    fullName: "Khoury.Masters.Orientation",
    title: "Khoury College New Master's Student Orientation",
    term: "Group Courses Term",
    color: "bg-green-700",
    image: null,
    instructor: "Khoury Staff",
  },
];

export const getCourseById = (id) => {
  return coursesData.find((course) => course.id === id);
};
