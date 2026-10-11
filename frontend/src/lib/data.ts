export const profile = {
  name: "Piyush Saini",
  firstName: "Piyush",
  lastName: "Saini",
  role: "Full-Stack Software Developer",
  availability: "Available for opportunities",
  experience: "2+ years",
  location: "India",
  email: "piyushsaini9098@gmail.com",
  phone: "9098678093",
  phoneDisplay: "+91 90986 78093",
  linkedin: "https://www.linkedin.com/in/piyush-saini-2622232a7/",
  github: "https://github.com/piyushsaini1234",
  resume: "/Resume/Piyush_Saini_Resume.pdf",
  tagline:
    "Building scalable web applications, cloud-native systems and AI-powered solutions.",
  about:
    "Experienced in designing, developing and deploying web applications integrated with cloud and AI services.",
  quote:
    "Passionate about building scalable products at the intersection of web, cloud and AI.",
};

export const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export const heroStack = [
  { label: "MERN", icon: "mern" },
  { label: "Next.js", icon: "nextjs" },
  { label: "Node.js", icon: "nodejs" },
  { label: "AWS", icon: "aws" },
  { label: "DevOps", icon: "devops" },
  { label: "AI", icon: "ai" },
];

export const aboutPillars = [
  {
    id: "01",
    title: "Full-Stack Development",
    icon: "code",
    items: ["React.js", "Next.js", "Node.js", "Express.js"],
  },
  {
    id: "02",
    title: "Cloud & DevOps",
    icon: "cloud",
    items: ["AWS", "Docker", "GitHub Actions", "CI/CD"],
  },
  {
    id: "03",
    title: "Backend Engineering",
    icon: "database",
    items: ["REST APIs", "Microservices", "Redis", "System Design"],
  },
  {
    id: "04",
    title: "AI & Integrations",
    icon: "ai",
    items: ["Generative AI", "Agentic AI", "RAG", "AI API Integrations"],
  },
];

export const journeySteps = [
  {
    id: "01",
    title: "Computer Science",
    text: "Built a strong foundation in programming, data structures and software development concepts.",
  },
  {
    id: "02",
    title: "Full-Stack Development",
    text: "Applied knowledge to build end-to-end web applications using modern technologies.",
  },
  {
    id: "03",
    title: "Cloud & DevOps",
    text: "Deployed and scaled applications using cloud services and modern DevOps practices.",
  },
  {
    id: "04",
    title: "AI Integration",
    text: "Exploring and integrating AI to build smarter and more intelligent applications.",
  },
];

export const experiences = [
  {
    role: "Full-Stack Software Developer",
    company: "Micro Technologies",
    period: "06/2024 — Present",
    meta: "Currently Working",
    location: "India",
    summary:
      "Working on scalable web applications, cloud-native systems and AI-integrated solutions using modern technologies. Involved in end-to-end development from frontend to backend, database design, cloud deployment and DevOps.",
    bullets: [
      "Designed, developed and maintained full-stack web applications.",
      "Built scalable and modular architecture using the MERN stack and microservices.",
      "Implemented secure authentication and authorization systems (JWT, OAuth 2.0, Cognito).",
      "Worked with relational and NoSQL databases (PostgreSQL, MongoDB, MySQL, Redis).",
      "Integrated cloud services and implemented CI/CD pipelines using GitHub Actions.",
      "Followed clean architecture, design patterns and best practices.",
      "Collaborated in an agile development environment and contributed to system design discussions.",
    ],
    technologies: [
      "MERN Stack",
      "React.js",
      "Redux",
      "Next.js",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Microservices",
      "System Design",
      "Clean Architecture",
      "Design Patterns",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "JWT",
      "OAuth 2.0",
      "AWS Cognito",
      "RBAC",
      "AWS",
      "Docker",
      "GitHub Actions",
      "CI/CD",
    ],
  },
];

export const experience = experiences[0];

export const architectureLayers = [
  {
    title: "Frontend (Web Application)",
    items: ["React.js", "Next.js", "Redux", "Tailwind CSS"],
    icon: "monitor",
  },
  {
    title: "REST API (API Gateway)",
    items: ["REST APIs", "Authentication", "Rate Limiting"],
    icon: "api",
  },
  {
    title: "Microservices (Backend Services)",
    items: ["Node.js", "Express.js", "Modular Services"],
    icon: "boxes",
  },
  {
    title: "Database & Cache",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    icon: "database",
  },
  {
    title: "AWS Infrastructure (Deployment)",
    items: ["EC2", "S3", "RDS", "CloudWatch"],
    icon: "aws",
  },
];

export const valueCards = [
  {
    title: "Performance",
    text: "Optimized and high-performance applications.",
    icon: "zap",
  },
  {
    title: "Security",
    text: "Secure authentication, RBAC and security best practices.",
    icon: "shield",
  },
  {
    title: "Scalability",
    text: "Modular and microservices-based architecture.",
    icon: "activity",
  },
  {
    title: "Cloud Deployment",
    text: "Deployed and managed on AWS with CI/CD pipelines.",
    icon: "cloud",
  },
];

export const beyondColumns = [
  {
    title: "AI Engineering",
    subtitle: "From ideas to intelligent applications",
    accent: "from-blue-500 to-cyan-400",
    items: [
      "Generative AI",
      "Agentic AI",
      "Prompt Engineering",
      "RAG",
      "AI API Integrations",
      "Chatbot Development",
    ],
    flow: ["Web Data", "Embedding", "Vector DB", "LLM", "Insights"],
  },
  {
    title: "Cloud",
    subtitle: "Scalable, secure and high-performance infrastructure",
    accent: "from-sky-400 to-blue-600",
    items: ["AWS", "EC2", "S3", "IAM", "RDS", "SQS", "SNS", "Auto Scaling", "CloudWatch"],
    flow: ["Users", "CloudFront", "EC2 / App", "RDS / S3", "Monitoring"],
  },
  {
    title: "DevOps",
    subtitle: "Automate, build, deploy and scale with confidence",
    accent: "from-violet-500 to-fuchsia-400",
    items: ["Docker", "Git", "GitHub Actions", "CI/CD Pipelines"],
    flow: ["Code", "Build", "Test", "Docker", "Deploy", "Monitor"],
  },
];

export const skillGroups = [
  {
    id: "01",
    title: "Frontend",
    text: "Building modern and responsive user interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux",
      "Redux Toolkit",
      "Zustand",
      "Context API",
      "GraphQL",
    ],
  },
  {
    id: "02",
    title: "Backend",
    text: "Building scalable and secure backend systems.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT",
      "OAuth2",
      "RabbitMQ",
      "Apache Kafka",
      "Redis",
      "Sequelize",
      "Microservices",
      "Swagger",
    ],
  },
  {
    id: "03",
    title: "Database",
    text: "Storing and managing data efficiently.",
    skills: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    id: "04",
    title: "DevOps & Cloud",
    text: "Deploying and scaling modern applications.",
    skills: [
      "AWS",
      "EC2",
      "S3",
      "IAM",
      "RDS",
      "SQS",
      "SNS",
      "Auto Scaling",
      "CloudWatch",
      "Docker",
      "Git",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  {
    id: "05",
    title: "AI & Integrations",
    text: "Exploring and building with AI-powered solutions.",
    skills: [
      "Generative AI",
      "Agentic AI",
      "Prompt Engineering",
      "RAG",
      "AI API Integrations",
      "Chatbot Development",
      "Google APIs",
      "Cursor",
      "GitHub Copilot",
      "OpenAI Codex",
    ],
  },
  {
    id: "06",
    title: "Testing / Tools",
    text: "Ensuring quality and better collaboration.",
    skills: ["Postman", "Jest", "Jira", "Agile / Scrum", "SDLC", "System Design"],
  },
  {
    id: "07",
    title: "Design & UX",
    text: "Creating beautiful and intuitive designs.",
    skills: [
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "Ant Design",
      "Figma",
      "Responsive Design",
    ],
  },
  {
    id: "08",
    title: "Payments",
    text: "Integrating secure payment solutions.",
    skills: ["Razorpay"],
  },
];

export const projects = [
  {
    slug: "sustanet",
    number: "01",
    category: "SDG / Social Impact",
    title: "SustaNet System",
    subtitle: "SDG Tracker",
    description:
      "SDG monitoring dashboards with real-time global development data and a scalable MySQL backend. Food donation platform connecting NGOs with people willing to donate surplus food.",
    stack: ["React", "Node.js", "Express", "MySQL", "AWS S3", "Firebase"],
    liveUrl: "#",
    highlights: [
      {
        title: "SDG Monitoring",
        text: "Real-time global development data with interactive visualizations and progress tracking.",
      },
      {
        title: "Food Donation Platform",
        text: "Simple and seamless interface to donate surplus food from events, hotels and restaurants.",
      },
      {
        title: "NGO Connections",
        text: "Connect with NGOs through an interactive map and easy assignment system.",
      },
      {
        title: "Real-time Impact",
        text: "Track donations, beneficiaries and SDG progress with live analytics.",
      },
    ],
  },
  {
    slug: "thinkloop",
    number: "02",
    category: "EdTech Platform",
    title: "ThinkLoop",
    subtitle: "EdTech Platform",
    description:
      "A modern EdTech platform connecting students, instructors and knowledge. Learn new skills, build real projects and grow your career with industry-focused courses.",
    stack: [
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "AWS S3",
      "Firebase",
      "WebSocket.io",
    ],
    liveUrl: "#",
    highlights: [
      {
        title: "Student Dashboard",
        text: "Continue learning, track progress and manage upcoming classes from one place.",
      },
      {
        title: "Instructor Dashboard",
        text: "Manage students, course performance and recent enrollments with live metrics.",
      },
      {
        title: "Course Marketplace",
        text: "Explore industry-focused courses across web, backend and career tracks.",
      },
      {
        title: "Secure Course Purchase",
        text: "Razorpay-powered checkout with a seamless student purchase flow.",
      },
    ],
  },
  {
    slug: "medstream",
    number: "03",
    category: "Healthcare",
    title: "MedStream",
    subtitle: "Integrated Healthcare System",
    description:
      "A secure and scalable healthcare management system with role-based access for Admins, Doctors and Patients. Manage patient records, appointments, medical documents and secure data storage with AWS S3.",
    stack: ["React.js", "Node.js", "Express.js", "AWS S3", "PostgreSQL", "REST API"],
    liveUrl: "#",
    highlights: [
      {
        title: "Role-Based Access",
        text: "Secure and controlled access for Admin, Doctor and Patient roles.",
      },
      {
        title: "Admin Dashboard",
        text: "Manage users, roles, doctors, patients and system-level settings.",
      },
      {
        title: "Doctor Dashboard",
        text: "View appointments, patient records, prescriptions and medical documents.",
      },
      {
        title: "Secure Medical Storage",
        text: "Encrypted medical records stored securely on AWS S3.",
      },
    ],
  },
  {
    slug: "homesphere",
    number: "04",
    category: "Real Estate",
    title: "HomeSphere",
    subtitle: "Integrated Real Estate Management System",
    description:
      "A full-featured real estate platform for buying, selling and managing property with a seamless user experience, secure transactions and scalable backend infrastructure.",
    stack: ["React", "Node.js", "Express", "MySQL", "AWS S3", "Razorpay"],
    liveUrl: "#",
    highlights: [
      {
        title: "Buyer Dashboard",
        text: "Search, explore and save properties with personalized recommendations.",
      },
      {
        title: "Seller Dashboard",
        text: "List and manage properties, inquiries and recent listings.",
      },
      {
        title: "Secure Purchase Flow",
        text: "Inquiry, verification, Razorpay payment and ownership transfer.",
      },
      {
        title: "Secure File Storage",
        text: "Property images and documents stored securely with AWS S3.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
