export const projectsData = [
  {
    id: 'shareway',
    title: 'ShareWay',
    category: 'Mobility / Carpooling Platform',
    status: 'Deployed',
    featured: true,
    description:
      'A dedicated carpooling platform that connects passengers with drivers who have available seats. Designed specifically for intercity journey sharing rather than traditional ride-hailing, promoting resource efficiency and affordable travel.',
    architectureDetails: [
      'Engineered cross-platform mobile interface using Flutter and Dart for reactive state performance.',
      'Constructed RESTful Node.js and Express.js backend for ride listing, matching, and seat booking.',
      'Utilized Firebase services for real-time messaging, state synchronization, and notifications.',
    ],
    technologies: ['Flutter', 'Node.js', 'Express.js', 'Firebase'],
    image: null,
    links: {
      live: null,
      github: null,
    },
  },
  {
    id: 'shopflow',
    title: 'ShopFlow',
    category: 'E-commerce Platform',
    status: 'Practical Full-Stack Application',
    featured: true,
    description:
      'An integrated multi-role e-commerce platform architected to support distinct buyer, vendor, and administrative operations within a consolidated system.',
    architectureDetails: [
      'Modular client architecture built with React, ensuring responsive product browsing, cart handling, and dashboard views.',
      'Server-side API architecture in Node.js and Express.js managing secure role-based access control.',
      'Structured MongoDB schemas supporting dynamic product catalogs, inventory tracking, and order history.',
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    image: null,
    links: {
      live: null,
      github: null,
    },
  },
  {
    id: 'coursemind-ai',
    title: 'CourseMind AI',
    category: 'AI-powered Learning Platform',
    status: 'Academic project in development',
    isAcademicProject: true,
    featured: true,
    description:
      'An AI-assisted learning workspace conceptualized to help university students organize course materials, interact with academic literature, and practice curriculum concepts through intelligent conversational agents.',
    architectureDetails: [
      'Interactive React workspace interface tailored for note structuring and academic queries.',
      'Node.js backend with PostgreSQL relational tables for user workspaces and syllabus tracking.',
      'Integration with external Large Language Model APIs for document summarization and interactive quizzes.',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AI APIs'],
    image: null,
    links: {
      live: null,
      github: null,
    },
  },
];

