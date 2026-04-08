import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  driftcode_logo,
  dunesdownload,
  quytechdownload,
  uplersdownload,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Dunes Factory Pvt. Ltd.",
    icon: dunesdownload,
    iconBg: "#383E56",
    date: "March 2021 - June 2024",
    points: [
      "Developed and maintained the frontend of web applications using JavaScript frameworks, with a focus on user interface and experience.",
      "Leveraged component-based architecture to build scalable and maintainable web applications.",
      "Optimized SEO, Lighthouse scores, and page speed, improving website performance and discoverability.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Uplers",
    icon: uplersdownload,
    iconBg: "#E6DEDD",
    date: "July 2024 - Mar 2025",
    points: [
      "Collaborated with US-based clients to gather requirements and develop custom web pages.",
      "Enhanced and maintained client admin panels and internal tools, improving usability and functionality.",
      "Built a low-code website builder using GrapeJS and React.js, enabling clients to create web pages with minimal technical effort.",
      "Integrated interactive games and animation for reward-based promotional platforms.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Drift Code",
    icon: driftcode_logo,
    iconBg: "#383E56",
    date: "April 2025 - Nov 2025",
    points: [
      "Created Web application for olympics sports and score.",
      "Led the development and maintenance of cross-platform web applications using React JS.",
      "Integrated RESTful APIs for all score and user data and Socket API for public chat rooms.",
      "Worked on optimizing application performance and ensuring efficient and smooth user experiences.",
      "Reviewed code written by team members, provided feedback, and ensured adherence to coding standards.",
      "Collaborated with clients across education and e-commerce industries to gather requirements and deliver tailored web solutions.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Quytech",
    icon: quytechdownload,
    iconBg: "#E6DEDD",
    date: "Dec 2025 - Mar 2026",
    points: [
      "Developed scalable UI architecture using Next.js, Typescript, and Tailwind CSS.",
      "Built advanced IDE-like programming editor using Monaco Editor and CodeMirror, implementing custom validation and schema support.",
      "Integrated AI services and Handled Errors and Hallucination of AI chat bot.",
      "Built a scalable and high-performance web application using React.js, Next.js, and TypeScript, implementing reusable component architecture, API integrations, and performance optimizations that improved load time by 35% and enhanced user experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
