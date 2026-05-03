export const data = {
  name: 'M Bhanu Teja',
  title: 'Full Stack & AI Developer',
  tagline: 'Building scalable systems at the intersection of web and intelligence.',
  bio: `Dedicated CS undergrad at Vardhaman College of Engineering with a 9.66 CGPA, specialising in cloud computing, full-stack development, and AI/ML. I've shipped production-grade MERN apps, deep learning pipelines, and AI-powered mobile tools — and I'm hungry for more. Currently interning at MassMutual while pushing the frontier of AI-driven software.`,
  location: 'Wanaparthy, Telangana, India',
  email: 'bhanuteja766192@gmail.com',
  phone: '+91 7981595894',
  social: {
    github: 'https://github.com/Bhanu02-maverick',
    linkedin: 'https://linkedin.com/in/M-BHANU-TEJA',
    leetcode: 'https://leetcode.com/u/Chaturya_BT/',
    hackerrank: 'https://hackerrank.com/bhanu',
  },

  experience: [
    {
      company: 'MassMutual',
      role: 'MERN Stack Intern',
      period: 'Jan 2025 – Oct 2025',
      location: 'Hyderabad, Telangana',
      points: [
        'Built a full-stack Library Management Portal with React.js, Node.js, Express and SQL.',
        'Implemented RESTful APIs for book inventory, secure auth, and real-time transaction logs.',
        'Designed a relational SQL schema ensuring data integrity for concurrent multi-user access.',
        'Used React hooks and functional components for efficient state management and seamless UX.',
      ],
      tags: ['React.js', 'Node.js', 'Express', 'SQL', 'REST API'],
    },
    {
      company: 'Edunet Foundation × Microsoft × SAP',
      role: 'AI & ML Research Intern',
      period: 'May 2024 – Aug 2024',
      location: 'Hyderabad, Telangana',
      points: [
        'Developed an AI-powered Resume Screening & Ranking System using NLP techniques.',
        'Built a cross-platform mobile UI with Dart and Flutter for iOS and Android.',
        'Integrated Google Firebase for real-time data, storage, and secure auth.',
        'Collaborated with Microsoft and SAP mentors; used Git-based agile workflows.',
      ],
      tags: ['Python', 'NLP', 'Flutter', 'Firebase', 'Git'],
    },
  ],

  projects: [
    {
      title: 'AI-Driven Smart Demand Forecasting',
      period: 'Jan 2026 – Present',
      description: 'Deep learning framework using LSTM & GRU to predict 14-day retail demand with high precision, featuring a full Streamlit dashboard with Profitability Matrix and Revenue Breakdown.',
      points: [
        'LSTM + GRU architectures capturing non-linear seasonal patterns.',
        'Mathematical optimisation layer for Dynamic Reorder Points (ROP) and Safety Stock.',
        'Interactive Streamlit dashboard for real-time business intelligence.',
        'Optimised for low-resource hardware — "Democratised AI" for local businesses.',
      ],
      tags: ['Python', 'TensorFlow', 'LSTM', 'GRU', 'Streamlit'],
      highlight: true,
    },
    {
      title: 'SkillBridge: Digital Credential Manager',
      period: 'Aug 2024 – Dec 2024',
      description: 'Secured digital credential system via a Chrome Extension enabling password-less logins and seamless task management across multiple websites.',
      points: [
        'Chrome Extension for password-less logins and encrypted credential storage.',
        'React.js + Bootstrap responsive interface for managing digital keys.',
        'Git-based version control for iterative collaborative deployment.',
      ],
      tags: ['React.js', 'Chrome Extension', 'HTML/CSS', 'Bootstrap', 'Git'],
      highlight: false,
    },
    {
      title: 'Library Management Portal',
      period: 'Jan 2025 – Present',
      description: 'Full-stack portal for resource tracking, digital cataloging, and user borrowing workflows — built during internship at MassMutual.',
      points: [
        'MERN stack with secure JWT authentication.',
        'RESTful API layer for inventory and transaction management.',
        'Optimised SQL schema for concurrent access and multi-level categorisation.',
      ],
      tags: ['React.js', 'Node.js', 'Express', 'SQL', 'JWT'],
      highlight: false,
    },
  ],

  skills: {
    'Languages': ['Python', 'JavaScript', 'Java', 'C/C++', 'SQL', 'HTML/CSS', 'Dart'],
    'Frontend': ['React.js', 'Bootstrap', 'Tailwind CSS', 'Flutter'],
    'Backend & DB': ['Node.js', 'Express', 'MongoDB', 'MySQL', 'Oracle SQL', 'Firebase'],
    'AI / ML': ['TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Matplotlib', 'Scipy'],
    'Cloud & DevOps': ['AWS (EC2, S3)', 'Google Cloud Platform', 'Jenkins', 'Git/GitHub', 'Docker'],
  },

  education: [
    {
      school: 'Vardhaman College of Engineering',
      degree: 'B.Tech in Computer Science & Engineering',
      period: '2023 – 2027',
      score: 'CGPA: 9.66 / 10.00',
    },
    {
      school: 'Sri Chaitanya Junior College',
      degree: 'Intermediate (MPC)',
      period: '2021 – 2023',
      score: '97.8%',
    },
    {
      school: 'Sri Chaitanya School',
      degree: 'Class X',
      period: '2021',
      score: 'CGPA: 10.00 / 10.00',
    },
  ],

  achievements: [
    { icon: '⚡', title: 'LeetCode 50-Day Challenge', desc: 'Completed 50 consecutive days of problem solving (ID: M BhanuTeja)' },
    { icon: '🏅', title: 'HackerRank 6 Gold/Silver Badges', desc: 'Problem Solving, Java, Python domains (ID: bhanu)' },
    { icon: '🎯', title: 'LeetCode Specialised Badges', desc: '2 badges for DSA topic mastery and consistent performance' },
    { icon: '🏆', title: 'Perfect Academic Record', desc: '10/10 GPA in Class X · 97.8% in Intermediate · 9.66 CGPA in B.Tech' },
  ],
};
