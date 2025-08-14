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
  // jobit,
  jlistings,
  vintech,
  solgrain,
  // microbridgelogo,
  solgrainltd,
  vil,
  tripguide,
  threejs,
} from "../assets";

// import microbridgelogo from "../assets/microbridge.jpeg";

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
  // {
  //   name: "Google Firebase",
  //   icon: firebase,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "GSAP",
  //   icon: gsap,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Frontend Intern",
    company_name: "Microbridge Technology Solutions",
    icon: vil,
    iconBg: "#383E56",
    date: "July 2021 - October 2021",
    points: [
      "First interaction with web development and technologies such as HTML, CSS and, JavaScript.",
      "Duplicated existing fronted practice UI and Improved UI across various web projects.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Contributed tremendously to weekly progress/stand-up meetings.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Atlas Dao",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Developing top notch functionalities that meet modern day business needs and requirements.",
      "Optimizing existing codebase to improve speed and accessibility of the website. ",
      "Adopting best practices for front-end development, including cross-browser compatibility, accessibility, and responsive designs.",
      "Testing the website's functionality, identifying and resolving any bugs or issues that may arise.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: solgrain,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "JobListings",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "February 2024 - March 2024",
    points: [
      "Developing and maintaining web applications using Next.js, and TypeScript.",
      "Developed a user-friendly, accessible, responsive and cross-browser compatible interface.",
      "Implemented simple and interactive animations to the website utilizing Tailwind CSS.",
      "Worked closely with the founder to ensure all functionalities and requirements were met.",
      "Used google firebase to create a seamless backend and store database in real time.",
      "Tested, identified and debugged issues with the website.",
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
    name: "Vintechenergies",
    description: " A Lagos-based provider of solar panels, inverters, and battery storage, delivering reliable off-grid power for homes and businesses.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: vintech,
    source_code_link: "https://github.com/Afiniki-Mhya/VIL",
    View_code_link: "https://www.vintechenergies.com/",
  },
  {
    name: "Job listings",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: jlistings,
    source_code_link: "https://github.com/Afiniki-Mhya/JobListings",
    View_code_link: "https://job-listings-5owk.vercel.app/",
  },
  {
    name: "Solgrain Limited",
    description:
      "A licensed Nigerian agri-export company connecting local farmers to global markets with premium, ethically sourced commodities.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: solgrainltd,
    source_code_link: "https://github.com/Afiniki-Mhya/solgrain-limited",
    View_code_link: "https://www.solgrainlimited.org/",
  },
];

export { services, technologies, experiences, testimonials, projects };
