// Consolidated content for scrollytelling portfolio

export const personalInfo = {
  name: "Abhinav Singh",
  title: "Full Stack Developer",
  email: "singhabhinav1311@gmail.com",
  phone: "(825) 889-1311",
  github: "https://github.com/abhinavsingh1311",
  linkedin: "https://linkedin.com/in/singhabhinav13112002",
  resumePath: "/resume.pdf",
};

export const aboutContent = {
  intro: `My journey into the world of technology began with a fascination for how things work. From a young age, I was captivated by the possibilities of what could be created through code. This curiosity led me to explore programming as more than just a skill—it became my passion.`,

  journey: `After completing my high school education at Shemrock Senior Secondary School in India in 2021, I decided to pursue my dream of becoming a software developer. This led me to Edmonton, Alberta, where I enrolled in the Computer Software Development program at the Northern Alberta Institute of Technology (NAIT).`,

  afpiBackground: {
    title: "The Foundation Years: AFPI Mohali",
    description: `My journey of personal growth began at the Armed Forces Preparatory Institute (AFPI) in Mohali. Those formative years instilled in me the core values of truth, honor, and integrity that continue to shape my character and approach to life. The rigorous military-style education and training transformed me in profound ways — I became more disciplined, independent, and developed a thoughtful perspective on challenges.`,
    extended: `At AFPI, each day began before dawn with physical training followed by academic studies focused on preparation for the National Defence Academy (NDA). The structured environment taught me time management, resilience, and the value of hard work. Living by a code of conduct that emphasized being truthful and trustworthy under all circumstances shaped my approach to every task.`,
    link: "https://www.mrsafpi.punjab.gov.in/",
  },

  canadaJourney: {
    title: "New Beginnings in Canada",
    description: `The decision to leave India was not an easy one, but it opened doors to unexpected opportunities. In 2022, I embarked on a journey to Canada, seeking to build a new future. Arriving in Edmonton was both exciting and intimidating — a new country, culture, and educational system awaited me.`,
    extended: `My early days in Canada were focused on adaptation and growth. I immersed myself in learning not just about software development at NAIT, but also about navigating life in a new country. The discipline and independence I had cultivated at AFPI served me well during this transition period.`,
  },

  naitJourney: {
    title: "My Path to Development",
    description: `At NAIT, I discovered my aptitude for both frontend and backend technologies. I became particularly interested in creating visually stunning interfaces while ensuring robust underlying systems.`,
    extended: `My dedication to excellence helped me master technologies like React, ASP.NET Core, and Three.js, along with database systems including PostgreSQL and MSSQL. I am especially proud of my work optimizing database schemas and implementing secure authentication systems.`,
    capstone: `My capstone project was a defining moment in my educational journey. Working as a full-stack developer, I reduced data processing time by 40% through optimized database structures and built intuitive interfaces that accelerated workflows by 35%. These achievements, along with implementing robust security measures, allowed us to deliver the project two weeks ahead of schedule with an A+ grade.`,
  },

  currentWork: `Today, I continue to push the boundaries of what is possible with web technologies. My recent work at SAIL (Society for AI Literacy) involved building an EHR data pipeline for cardiologists—an automated system using OpenAI's API that parses and standardizes medical records, saving clinicians hundreds of hours of manual data entry each month.`,

  languages: `I am fluent in English, Punjabi (my native language), and Hindi, which helps me connect with diverse teams and collaborate effectively.`,
};

export const education = {
  institution: "Northern Alberta Institute of Technology (NAIT)",
  program: "DMIT: Computer Software Dev. Diploma",
  period: "2023-2024",
  link: "https://www.nait.ca/programs/software-development",
  achievements: [
    "Graduated with perfect 4.0 CGPA",
    "Earned a place on the Dean's Honor Roll",
    "Specialized in full-stack development with React, ASP.NET, C#, System Design, Project management",
    "Led a capstone project that was delivered two weeks ahead of schedule",
  ],
};

export const experiences = [
  {
    company: "Society For AI Literacy (SAIL)",
    link: "https://societyforailiteracy.com/",
    role: "Full Stack Developer",
    period: "May 2025 - August 2025",
    description: [
      "Built full-stack data collection system using JavaScript, TypeScript, and Python, improving data processing efficiency by 25%",
      "Integrated OpenAI API with structured prompt engineering, achieving 90%+ accuracy in automated medical data extraction",
      "Developed RESTful APIs using JSON Server backend, reducing manual processing time from 4 hours to 45 minutes per batch",
      "Redesigned React frontend with modern UI/UX principles, increasing user engagement by 40% based on analytics metrics",
      "Implemented Supabase database integration for real-time data synchronization and secure user authentication",
      "Collaborated with cross-functional team using Agile methodology, participating in daily standups and 2-week sprint cycles",
    ],
    technologies: [
      "Express.js",
      "PostgreSQL",
      "Supabase",
      "Next.js",
      "Python",
      "REST APIs",
      "OpenAI API",
    ],
  },
  {
    company: "DMIT CSD Capstone Project",
    link: "https://certifiedorigins.space",
    role: "Full Stack Developer",
    period: "September 2024 - December 2024",
    description: [
      "Reduced data processing time by 40% through optimized PostgreSQL schema and efficient data pipelines",
      "Enhanced security by 85% implementing JWT tokenization and role-based access control",
      "Accelerated workflows by 35% with intuitive React interfaces for product management",
      "Delivered project 2 weeks ahead of schedule with an A+ grade",
    ],
    technologies: [
      "React",
      "PostgreSQL",
      "Supabase",
      "Digital Ocean",
      "JWT",
      "REST APIs",
    ],
  },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Blazor",
      "Flutter",
      "Three.js",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Backend",
    items: ["ASP.NET", "Node.js", "RESTful APIs", "Express.js"],
  },
  {
    category: "Languages",
    items: ["C#", "JavaScript", "TypeScript", "Python", "Dart", "SQL"],
  },
  {
    category: "Databases & Cloud",
    items: [
      "MSSQL Server",
      "PostgreSQL",
      "Firebase",
      "Supabase",
      "Digital Ocean",
    ],
  },
  {
    category: "Tools & Others",
    items: ["Docker", "Git", "SSAS", "SSIS", "SSRS", "Github Actions"],
  },
];

export const projects = [
  {
    title: "roast as a service",
    description:
      "Allows configurable roasts using OpenAI API that can be integrated with Discord, websites etc.",
    imageUrl: "/projects/roast.png",
    link: "https://roast-api-two.vercel.app",
    stack: "Rest APIs, Javascript, Express.js, OpenAI's API",
    featured: true,
  },
  {
    title: "City Roads",
    description:
      "Allows to render city roads for a City using Three.js, Nomantin and OpenstreeMap apis used",
    imageUrl: "/projects/cityRoads.png",
    link: "https://cityRoads.space",
    stack: "Vite.js, TailwindCSS, WebGL, THREE.js, Nomatin & OpenStreetMap API",
    featured: true,
  },
  {
    title: "3-D Space Portfolio",
    description: "Comprehensive Three.js personal portfolio",
    imageUrl: "/projects/preview.png",
    link: "https://mixtape-lab.vercel.app",
    featured: true,
  },
  {
    title: "Mixtape Card Generator",
    description:
      "Users paste Spotify links and generate a shareable mixtape card.",
    imageUrl: "/projects/mixtape.png",
    link: "https://somemixtapes.com",
    stack: "Next.js, TailwindCSS, Spotify API",
    featured: true,
  },
  {
    title: "WebHooks Service",
    description:
      "Start delivering webhooks with confidence. No more lost events!",
    imageUrl: "/projects/whds.png",
    link: "https://abhinavsingh1311.github.io/webhooks-delivery-service",
    stack: "C# (BLAZOR), ASP.NET, Rest APIs, Azure Containers, SQL Server",
    featured: true,
  },
  {
    title: "Resume Scanner & Analysis",
    description:
      "Comprehensive extraction, parsing and analysis system that provides score as per ATS and job recommendations as per the resume",
    imageUrl: "/projects/resumeAI.png",
    link: "https://toastmyresume.dev/",
    stack: "Next.js, TailwindCSS, Claude API",
    featured: true,
  },
  {
    title: "Plant Care Mobile App",
    description:
      "Comprehensive application to ensure plants get the care they deserve, built using Flutter and Firebase",
    imageUrl: "/projects/projects.png",
    link: "https://github.com/abhinavsingh1311/plant_mobile_app.git",
    stack: "Flutter + Dart, Android Studio, FireBase",
    featured: false,
  },
  {
    title: "More Projects",
    description:
      "I have added all of my projects in this GitHub repository. Take a look!",
    imageUrl: "/projects/projects.png",
    link: "https://github.com/abhinavsingh1311/Projects.git",
    featured: false,
  },
];

export const blogContent = {
  articles: [
    {
      title: "Poetry and Creative Writing",
      excerpt:
        "Explore my collection of poems and creative writings on my personal blog.",
      date: "2024-02-14",
      readTime: "5",
      link: "https://envisagedmemoirs.blogspot.com/",
    },
  ],
  featuredPoem: {
    title: "Farewell",
    lines: [
      "Heart ponders",
      "Eyes remember",
      "Portraying thy smiling countenance",
      "",
      "Dilutes my worldly afflictions",
      "Remembering all your sayings",
      "You shall continue thrive in my beliefs",
      "For all that matters is love",
      "Residing in my heart's archives",
    ],
  },
  photography: {
    description:
      "Beyond coding and writing, I find balance and creative expression through different Photography forms. It allows me to slow down, observe closely, and translate my perspective into a photo. Each picture represents a moment of focus and contemplation.",
    link: "https://vsco.co/cokenotcoke/gallery",
  },
};

export const contacts = [
  {
    type: "email",
    label: "Email",
    value: "singhabhinav1311@gmail.com",
    href: "mailto:singhabhinav1311@gmail.com",
  },
  {
    type: "phone",
    label: "Phone",
    value: "(825) 889-1311",
    href: "tel:+18258891311",
  },
  {
    type: "github",
    label: "GitHub",
    value: "github.com/abhinavsingh1311",
    href: "https://github.com/abhinavsingh1311",
  },
  {
    type: "linkedin",
    label: "LinkedIn",
    value: "LinkedIn Profile",
    href: "https://linkedin.com/in/singhabhinav13112002",
  },
];

// Section configuration for scroll navigation
export const sections = [
  { id: "hero", label: "Home", color: "#0a0a0a" },
  { id: "about", label: "About", color: "#E27B58" },
  { id: "experience", label: "Experience", color: "#4B9CD3" },
  { id: "skills", label: "Skills", color: "#4B9CD3" },
  { id: "projects", label: "Projects", color: "#E6B800" },
  { id: "blog", label: "Blog & Arts", color: "#E6B800" },
  { id: "contact", label: "Contact", color: "#C88B3A" },
] as const;

export const imagePaths = {
  bg1: "/bg1.jpg",
  bg2: "/bg2.jpg",
  bg3: "/bg3.jpg",
  bg4: "/bg4.jpg",
  bg5: "/bg5.png",
  earlyDays: "/projects/early-days.jpg",
  journey: "/projects/journey.gif",
  coding: "/projects/coding.jpg",
  codingJourney: "/projects/coding-journey.jpg",
  afpiMohali: "/projects/AFPI.jpg",
  naitLogo: "/projects/nait-logo.jpg",
  portfolio: "/projects/portfolio-dev.gif",
  logo: "/projects/nait-logo-1.jpg",
};
