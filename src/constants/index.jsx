import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
export const NAVIGATION_LINKS = [
  { label: "Bio", href: "#bio" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
export const HERO = {
  name: "Ashmit Ghosh",
  greet: "Hello there! 👋🏻",
  description:
   "I am software engineer. I am committed to developing innovative solutions that enhance user experiences and drive business success, and I am eager to contribute my expertise to dynamic, growth-oriented teams."
};
export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/Ashmitghosh/portfolio",
  },
  {
    id: 2,
    name: "File Sharing Web Application",
    description:
      "• Utilized Multer for efficient file handling and management within a Node.js environment, enabling users to upload files seamlessly, handling up to 100+ files.\n" +
      "• Implemented bcrypt for password security, providing a secure hashing mechanism and achieving a 30% reduction in unauthorized access to sensitive data.\n" +
      "• Created a responsive user interface using HTML and CSS, dynamically displaying file links, ensuring direct access for over 100 users.",
    image: projectImage2,
    githubLink: "https://github.com/Ashmitghosh/file-share",
  },
  {
    id: 3,
    name: "Real-Time Chat Room",
    description:
      "• Developed a chat room that supports real-time messaging functionality using React and Firebase.\n" +
      "• Leveraged Firestore's real-time capabilities to ensure messages are instantly visible to all users.\n" +
      "• Implemented user authentication using Firebase Authentication, enabling secure login via Google Sign-In.\n" +
      "• Managed user sessions and access control, ensuring secure and reliable authentication.\n" +
      "• Utilized Chakra UI for designing an intuitive and responsive user interface, enhancing the overall user experience.",
    image: projectImage3,
    githubLink: "https://github.com/Ashmitghosh/chatroom",
  },
  {
    id: 4,
    name: "Real-Time News Aggregator",
    description:
      "• Designed and developed a real-time news website.\n" +
      "• The platform dynamically fetches the latest headlines and organizes articles by categories such as technology, sports, and politics.\n" +
      "• Integrated NewsAPI to fetch and update news articles in real-time.\n" +
      "• Implemented user interface components using React and styled them with Bootstrap.",
    image: projectImage4,
    githubLink: "https://github.com/Ashmitghosh/newshiverev",
  },
  {
    id: 5,
    name: "Image Conversion Website",
    description:
      "• Developed a utility website enabling users to upload images in various formats, with options to convert images to grayscale or WebP format.\n" +
      "• Developed an efficient image processing pipeline using OpenCV, allowing users to choose between grayscale conversion and format change to WebP.\n" +
      "• Ensured a seamless user experience by providing immediate download options for processed images.",
    image: projectImage5,
    githubLink: "https://github.com/Ashmitghosh/flask-image-conversion",
  },
];


export const BIO = [
  "I’m a dynamic software engineer and full-stack developer with a passion for emerging technologies and innovative problem-solving. With expertise in programming languages such as JavaScript, Python, Java, and HTML/CSS, I specialize in building responsive, user-friendly applications that prioritize performance and functionality.",
  
  "My skills span across front-end and back-end development, data analysis, and neural networks, making me a versatile and well-rounded developer. Throughout my career, I’ve successfully delivered a variety of projects, from real-time news websites and file-sharing applications to advanced image processing utilities.",
  
  "My proficiency in frameworks and tools like React, Node.js, Flask, OpenCV, and Bootstrap allows me to create seamless, efficient, and visually appealing digital experiences.",
  
  "Currently, I’m a final-year software engineering student, honing my skills in developing robust applications and exploring the intersections of technology and user experience. I thrive in challenging environments and am driven by a commitment to continuous learning and innovation. Whether it’s developing a new feature, optimizing code, or designing a captivating interface, I am dedicated to pushing the boundaries of what’s possible in software development."
];


export const SKILLS = [
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
  
  {
    icon: <SiFlask className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Flask",
    experience: "2+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <GrMysql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "SQL",
    experience: "1+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Frontend Developer",
    company: "Oasis Infobyte",
    duration: "March 2023 - April 2023",
    description: `
      • Implemented a comprehensive image processing solution that improved format conversions and boosted user engagement by 20% by providing instant download choices for processed images, leading to a 95% user satisfaction rate.
      • Leveraged OpenCV to optimize processing algorithms, resulting in a 40% reduction in image processing time.
      • Consistently ensured timeliness and dependability by meeting all project deadlines and upholding superior performance standards.
    `,
  },
];


export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Netaji Subhash Engineering College",
    duration: "2021 - 2025",
    description:
      "8.49 GPA",
  },
  {
    degree: "Class XII",
    institution: "SHIV JYOTI INTERNATIONAL SCHOOL",
    duration: "2021",
    description:
      "91.2%",
  },
  {
    degree: "Class X",
    institution: "Modern English Academy",
    duration: "2019",
    description:
      "94.2%",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  
  {
    href: "https://leetcode.com/u/ashmitghosh398/",
    icon: <SiLeetcode fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Ashmitghosh",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/ashmit-ghosh/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
