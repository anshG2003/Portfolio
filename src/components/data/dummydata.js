import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined, PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material"

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
  {
    url: "/testimonials",
    text: "Testimonials",
  },
  {
    url: "/blog",
    text: "Blog",
  },
  {
    url: "/contact",
    text: "Contact",
  },
]
export const home = [
  {
    text: "HELLO I'M",
    name: "ANSH GUPTA",
    post: "WEB DEVELOPER",
    design: "",
    desc: "I like to craft solid and scalable frontend products with great user experiences.",
  },
]
export const about = [
  {
    desc: "I'm your go-to Full Stack Developer, ready to bring your dream product to life in the virtual world. From crafting sleek websites for small and medium-sized businesses to empowering you by building your dream tech product, I've got the skills and expertise to make it happen.",
    desc1:"With a mastery of JavaScript, React.js, Node.js, express.js, CSS and Next.js, I can help ensure your online presence stands out from the crowd. I am skilled in creating user-friendly interfaces, building RESTful APIs, and seamlessly integrating external services. Besides, I am a technical lead/project manager, who prefers to meticulously oversee every aspect of a project, from conception to completion, leaving no room for mediocrity.",
    desc2: "Your dream + my expertise = scalable, performant, reliable, and intuitive products. Let's build something extraordinary!",
    cover: "./images/man.png",
  },
]
export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "MongoDB",
    desc: "With MongoDB Atlas, developers work with documents, which are far more flexible and versatile than the rows and columns of SQL-based relational databases. Documents map to objects in code, so they're easier to work with, and schema changes are far simpler than with RDBMS.",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Express",
    desc: "Express is a user-friendly framework that simplifies the development process of Node applications. It uses JavaScript as a programming language and provides an efficient way to build web applications and APIs.",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "React.js",
    desc: "React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development.",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "Tailwind CSS",
    desc: "Tailwind CSS is a utility-first CSS framework that streamlines web development by providing a set of pre-designed utility classes.",
  },
  {
    id: 5,
    icon: <Code />,
    title: "Next.js	",
    desc: "As an asynchronous event-driven JavaScript runtime, Next.js is designed to build scalable network applications.",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "MySQL",
    desc: "The database structure is organized into physical files optimized for speed.",
  },
]
export const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "89",
    title: "HAPPY CLIENTS",
  },
  {
    id: 2,
    icon: <FavoriteBorder />,
    num: "231",
    title: "PROJECTS COMPLETED",
  },
  {
    id: 3,
    icon: <Public />,
    num: "108",
    title: "FILES DOWNLOADED",
  },
  {
    id: 4,
    icon: <PersonOutlined />,
    num: "1446",
    title: "LINES OF CODE",
  },
]
export const portfolio = [
  {
    id: 1,
    cover: "../images/port/P1.jpg",
    name: "Brand",
    category: "marketing",
    title: "Weather App",
  },
  {
    id: 2,
    cover: "../images/port/P2.jpg",
    name: "",
    category: "design",
    title: "To-Do List",
  },
  {
    id: 3,
    cover: "../images/port/P3.jpg",
    name: "",
    category: "development",
    title: "Quiz App",
  },
  {
    id: 4,
    cover: "../images/port/P4.png",
    name: "",
    category: "marketing",
    title: "Random Password Generator",
  },
  {
    id: 5,
    cover: "../images/port/P5.jpg",
    name: "",
    category: "design",
    title: "Notes App",
  },
  {
    id: 6,
    cover: "../images/port/P6.png",
    name: "",
    category: "development",
    title: "Age Calculator",
  },
]
export const testimonials = [
  {
    id: 1,
    text: "The guys did a fantastic job creating a new website for College Functions. ",
    image: "./images/testimonials/T1.jpg",
    name: "Satyam Rastogi",
    post: "Front End Developer",
  },
  {
    id: 2,
    text: "We are extremely happy with the website that Ansh has created for me.",
    image: "./images/testimonials/T2.jpg",
    name: "Siddharth Singh",
    post: "Back End Developer",
  },
  {
    id: 3,
    text: "I have worked with other web designers before but was never satisfied with the end result. From start to finish my interaction with Ansh was professional, stress-free",
    image: "./images/testimonials/T3.jpg",
    name: "Aman Verma",
    post: "React Developer",
  },
]
export const blog = [
  {
    id: 1,
    title: "Master These Awesome",
    date: "Jun 27, 2024",
    author: "Ansh",
    desc: "",
    cover: "./images/blog/b1.png",
  },
  {
    id: 2,
    title: "Best Design Items to Appeal",
    date: "July 4, 2024",
    author: "Ansh",
    desc: "",
    cover: "./images/blog/b2.png",
  },
  {
    id: 3,
    title: "The 20 Best Lightroom Presets",
    date: "July 7, 2024",
    author: "Ansh",
    desc: "",
    cover: "./images/blog/b3.png",
  },
]
export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "Lucknow,Uttar Pradesh",
    text2: "India, 226020",
  },
  {
    icon: <PhoneIphone />,
    text1: "8004610357",
    text2: "7415403230",
  },
  {
    icon: <EmailOutlined />,
    text1: "anshgupta2003@gmail.com",
    text2: "",
  },
]
export const social = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Twitter />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <YouTube />,
  },
]
