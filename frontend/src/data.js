export const data = {
  name: 'M Bhanu Teja',
  title: 'Full Stack & AI Developer',
  tagline: 'I design full-stack products, AI workflows, and cloud-ready systems that feel fast, useful, and reliable.',
  bio: `Dedicated CS undergrad at Vardhaman College of Engineering with a 9.66 CGPA, specialising in cloud computing, full-stack development, and AI/ML. I've shipped MERN apps, deep learning pipelines, and AI-powered mobile tools while building a strong problem-solving profile across coding platforms.`,
  location: 'Wanaparthy, Telangana, India',
  email: 'bhanuteja766192@gmail.com',
  phone: '+91 7981595894',
  focus: ['Full Stack Engineering', 'AI/ML Systems', 'Cloud & DevOps', 'DSA Problem Solving'],
  social: {
    github: 'https://github.com/Bhanu02-maverick',
    linkedin: 'https://linkedin.com/in/M-BHANU-TEJA',
    leetcode: 'https://leetcode.com/u/Chaturya_BT/',
    hackerrank: 'https://hackerrank.com/bhanu',
  },

  stats: [
    { value: '9.66', label: 'Current CGPA', detail: 'B.Tech CSE' },
    { value: '50+', label: 'LeetCode Streak', detail: 'Daily DSA habit' },
    { value: '6', label: 'HackerRank Badges', detail: 'Problem solving, Java, Python' },
    { value: '5+', label: 'Major Builds', detail: 'AI, MERN, cloud, extensions' },
  ],

  codingProfiles: [
    {
      platform: 'LeetCode',
      handle: 'Chaturya_BT',
      url: 'https://leetcode.com/u/Chaturya_BT/',
      metric: '50-day challenge',
      note: 'Consistent DSA practice with specialised topic badges.',
      tags: ['Arrays', 'Strings', 'Dynamic Programming', 'SQL'],
    },
    {
      platform: 'HackerRank',
      handle: 'bhanu',
      url: 'https://hackerrank.com/bhanu',
      metric: '6 badges',
      note: 'Gold and silver badges across Java, Python, and problem solving.',
      tags: ['Java', 'Python', 'Problem Solving'],
    },
    {
      platform: 'GitHub',
      handle: 'Bhanu02-maverick',
      url: 'https://github.com/Bhanu02-maverick',
      metric: 'Project portfolio',
      note: 'Full-stack, AI/ML, and academic builds organised for recruiters.',
      tags: ['React', 'Node', 'Python', 'Cloud'],
    },
  ],

  services: [
    {
      title: 'Full-stack products',
      desc: 'Responsive React interfaces, API layers, authentication, dashboards, and database-backed workflows.',
    },
    {
      title: 'AI/ML prototypes',
      desc: 'NLP, forecasting, classification, and model-powered tools that turn datasets into usable decisions.',
    },
    {
      title: 'Cloud-ready systems',
      desc: 'Deployable apps with practical DevOps thinking, clean project structure, and production-minded configuration.',
    },
  ],

  experience: [
    {
      company: 'MassMutual',
      role: 'MERN Stack Intern',
      period: 'Jan 2025 - Oct 2025',
      location: 'Hyderabad, Telangana',
      points: [
        'Built a full-stack Library Management Portal with React.js, Node.js, Express, and SQL.',
        'Implemented RESTful APIs for book inventory, secure auth, and real-time transaction logs.',
        'Designed a relational SQL schema ensuring data integrity for concurrent multi-user access.',
        'Used React hooks and functional components for efficient state management and seamless UX.',
      ],
      tags: ['React.js', 'Node.js', 'Express', 'SQL', 'REST API'],
    },
    {
      company: 'Edunet Foundation x Microsoft x SAP',
      role: 'AI & ML Research Intern',
      period: 'May 2024 - Aug 2024',
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
      period: 'Jan 2026 - Present',
      type: 'AI / Deep Learning',
      description: 'A deep learning retail forecasting system using LSTM and GRU models to predict 14-day product demand and support smarter inventory decisions.',
      points: [
        'LSTM and GRU architectures capture non-linear seasonal buying patterns.',
        'Dynamic Reorder Point and Safety Stock logic supports inventory planning.',
        'Streamlit dashboard visualises demand, revenue, and profitability matrices.',
        'Optimised for low-resource hardware so local businesses can use AI insights.',
      ],
      tags: ['Python', 'TensorFlow', 'LSTM', 'GRU', 'Streamlit'],
      impact: 'Forecasting dashboard for smarter retail inventory',
      highlight: true,
    },
    {
      title: 'SkillBridge: Digital Credential Manager',
      period: 'Aug 2024 - Dec 2024',
      type: 'Browser Extension',
      description: 'A secure credential manager and Chrome Extension that enables password-less login workflows and smoother task management across websites.',
      points: [
        'Built extension flows for encrypted credential storage and quick access.',
        'Created a responsive React.js and Bootstrap interface for managing digital keys.',
        'Used Git-based iteration to support collaborative development and deployment.',
      ],
      tags: ['React.js', 'Chrome Extension', 'HTML/CSS', 'Bootstrap', 'Git'],
      impact: 'Safer, faster login experience for everyday web users',
      highlight: false,
    },
    {
      title: 'Library Management Portal',
      period: 'Jan 2025 - Present',
      type: 'MERN / SQL',
      description: 'A full-stack portal for resource tracking, digital cataloging, user borrowing workflows, and transaction visibility.',
      points: [
        'MERN-style application with secure JWT authentication and protected routes.',
        'RESTful API layer handles inventory, users, borrowing, and return workflows.',
        'SQL schema supports concurrent access and structured categorisation.',
      ],
      tags: ['React.js', 'Node.js', 'Express', 'SQL', 'JWT'],
      impact: 'Operational dashboard for library resource management',
      highlight: false,
    },
    {
      title: 'AI Resume Screening & Ranking',
      period: 'May 2024 - Aug 2024',
      type: 'NLP / Mobile',
      description: 'An AI-assisted screening tool that parses resumes, scores candidate fit, and helps recruiters shortlist applicants faster.',
      points: [
        'Used NLP techniques to extract and compare resume content against role requirements.',
        'Designed a Flutter interface for cross-platform mobile access.',
        'Integrated Firebase for storage, authentication, and real-time data updates.',
      ],
      tags: ['Python', 'NLP', 'Flutter', 'Firebase'],
      impact: 'Recruiter workflow automation with AI-assisted ranking',
      highlight: false,
    },
  ],

  skills: {
    Languages: ['Python', 'JavaScript', 'Java', 'C/C++', 'SQL', 'HTML/CSS', 'Dart'],
    Frontend: ['React.js', 'Tailwind CSS', 'Bootstrap', 'Flutter', 'Framer Motion'],
    'Backend & DB': ['Node.js', 'Express', 'MongoDB', 'MySQL', 'Oracle SQL', 'Firebase'],
    'AI / ML': ['TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Matplotlib', 'Scipy', 'NLP'],
    'Cloud & DevOps': ['AWS EC2', 'AWS S3', 'Google Cloud Platform', 'Jenkins', 'Git/GitHub', 'Docker'],
  },

  education: [
    {
      school: 'Vardhaman College of Engineering',
      degree: 'B.Tech in Computer Science & Engineering',
      period: '2023 - 2027',
      score: 'CGPA: 9.66 / 10.00',
    },
    {
      school: 'Sri Chaitanya Junior College',
      degree: 'Intermediate (MPC)',
      period: '2021 - 2023',
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
    { title: 'LeetCode 50-Day Challenge', desc: 'Completed 50 consecutive days of problem solving.' },
    { title: 'HackerRank Badges', desc: 'Six badges across problem solving, Java, and Python.' },
    { title: 'DSA Topic Badges', desc: 'Specialised LeetCode badges for topic mastery and consistency.' },
    { title: 'Strong Academics', desc: '10/10 GPA in Class X, 97.8% in Intermediate, and 9.66 CGPA in B.Tech.' },
  ],
};
