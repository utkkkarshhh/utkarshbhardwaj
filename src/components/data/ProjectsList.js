import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaJava } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiRedux } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BsBootstrapFill } from "react-icons/bs";
import { DiJqueryLogo } from "react-icons/di";

// Fullstack, UX/UI, Other, All

//Fullstack
// GhostMail
// BookLibrary
// E-Commerce Store
// Movie Review Website
// Timeli App
// Keeper
// Random Quote Generator
//FoodMania

// UX/UI
//Facebook, Netflix, Twitter, Google Clone, WaterMyPlantsUI, Spotify, Graviti UI

//Other
//WaterMyPlants - IOT
//Decentralised Election - Blockchain

export let featuredProjects = [
  {
    name: "Ghost Mail: Connect Anonymously",
    "tech-name": {
      "tech-name1": "ReactJS",
      "tech-name2": "NodeJS",
      "tech-name3": "PostgresSQL",
    },
    description:
      "Anonymous messaging platform developed with ReactJS, NodeJS, and PostgreSQL.",
    codebtn: "https://github.com/utkkkarshhh/ghost-mail",
    demobtn: "https://ghost-mail.vercel.app/",
    imagePath: require("../../img/projects/Web/GhostMail.png"),
    redirect: "/projects/Project1",
  },
  {
    name: "Decentralized Election: Ethereum based Election Dapp",
    "tech-name": {
      "tech-name1": "ReactJS",
      "tech-name2": "NodeJS",
      "tech-name3": "Solidity",
    },
    description:
      "Anonymous messaging platform developed with ReactJS, NodeJS, and PostgreSQL.",
    codebtn: "https://github.com/utkkkarshhh/ghost-mail",
    demobtn: "https://ghost-mail.vercel.app/",
    imagePath: require("../../img/projects/Other/DApp.png"),
    redirect: "/projects/Project2",
  },
  {
    name: "Multithreaded Task Scheduler using Java",
    "tech-name": {
      "tech-name1": "Core Java",
      "tech-name2": "Maven",
      "tech-name3": "Postgres SQL",
    },
    description:
      "Anonymous messaging platform developed with ReactJS, NodeJS, and PostgreSQL.",
    codebtn: "https://github.com/utkkkarshhh/ghost-mail",
    demobtn: "https://ghost-mail.vercel.app/",
    imagePath: require("../../img/projects/Web/GhostMail.png"),
    redirect: "/projects/:multithreaded-task-scheduler",
  },
];

export const data = [
  {
    id: "Fullstack",
    name: "Ghost Mail: Connect Anonymously",
    "tech-name": {
      "tech-name1": "ReactJS",
      "tech-name2": "NodeJS",
      "tech-name3": "PostgresSQL",
    },
    description:
      "Anonymous messaging platform developed with ReactJS, NodeJS, and PostgreSQL.",
    codebtn: "https://github.com/utkkkarshhh/ghost-mail",
    demobtn: "https://ghost-mail.vercel.app/",
    imagePath: require("../../img/projects/Web/GhostMail.png"),
  },
  {
    id: "Fullstack",
    name: "BookAdda: Read, Buy and Save Books",
    "tech-name": {
      "tech-name1": "ReactJS",
      "tech-name2": "NodeJS",
      "tech-name3": "PostgresSQL",
    },
    description: "Book library app built with ReactJS, NodeJS, and PostgreSQL.",
    codebtn: "https://github.com/utkkkarshhh/bookLibrary",
    demobtn: "https://book-library-sgrt.vercel.app/",
    imagePath: require("../../img/projects/Web/BookAdda.png"),
  },
  {
    id: "Fullstack",
    name: "E-Commerce Store",
    "tech-name": {
      "tech-name1": "ReactJS",
      "tech-name2": "NodeJS",
      "tech-name3": "PostgresSQL",
    },
    description:
      "Authenticated e-commerce store with cart functionality developed using ReactJS, NodeJS, and PostgreSQL.",
    codebtn: "https://github.com/utkkkarshhh/ecommerce-store",
    demobtn: "https://ecommerce-store-five-flax.vercel.app/",
    imagePath: require("../../img/projects/Web/Ecommerce.png"),
  },
  {
    id: "Others",
    name: "Decentralized Election: Ethereum based Dapp",
    "tech-name": {
      "tech-name1": "ReactJS",
      "tech-name2": "Ethereum",
      "tech-name3": "Solidity",
    },
    description:
      "Ethereum-based decentralized voting application using ReactJS and Solidity.",
    codebtn: "",
    demobtn: "",
    imagePath: require("../../img/projects/Other/DApp.png"),
  },
  {
    id: "Fullstack",
    name: "MovieReview: Share Movies and Reviews",
    "tech-name": {
      "tech-name1": "ReactJS",
      "tech-name2": "NodeJs",
      "tech-name3": "Supabase",
    },
    description:
      "Movie Review app allowing users to share reviews and movies, Supabase integrated to act as database providing realtime CRUD features. (Made as internship assessment project.)",
    codebtn: "https://github.com/utkkkarshhh/sassMonk",
    demobtn: "https://sass-monk-client.vercel.app/",
    imagePath: require("../../img/projects/Web/MovieReview.png"),
  },
  {
    id: "Fullstack",
    name: "Keeper: Modern way of taking notes.",
    "tech-name": {
      "tech-name1": "ReactJS",
      "tech-name2": "NodeJS",
      "tech-name3": "MongoDB",
    },
    description: "Note-taking app developed with ReactJS, NodeJS, and MongoDB.",
    codebtn: "https://github.com/utkkkarshhh/keeper",
    demobtn: "https://keeper-chi-three.vercel.app/",
    imagePath: require("../../img/projects/Web/Keeper.png"),
  },
  {
    id: "Fullstack",
    name: "Random Quote Generator",
    "tech-name": {
      "tech-name1": "ReactJS",
      "tech-name2": "NodeJs",
      "tech-name3": "QuotesAPI",
    },
    description: "ReactJS app fetching quotes from QuotesAPI.",
    codebtn: "https://github.com/utkkkarshhh/randomquotegenerator",
    demobtn: "https://randomquotegenerator-sigma.vercel.app/",
    imagePath: require("../../img/projects/Web/RandomQuoteGenerator.png"),
  },
  {
    id: "Fullstack",
    name: "Foodmania: Get your favourite food.",
    "tech-name": {
      "tech-name1": "ReactJS",
      "tech-name2": "NodeJS",
      "tech-name3": "Firebase",
    },
    description:
      "Food ordering app developed with ReactJS, NodeJS, and Firebase.",
    codebtn: "https://github.com/utkkkarshhh/foodmania",
    demobtn: "https://foodmania-lake.vercel.app/",
    imagePath: require("../../img/projects/Web/FoodMania.png"),
  },
  {
    id: "Fullstack",
    name: "Timeli App",
    "tech-name": {
      "tech-name1": "ReactJS",
      "tech-name2": "NodeJS",
      "tech-name3": "MongoDB",
    },
    description:
      "Timeli web application developed with ReactJS, NodeJS, and MongoDB.",
    demobtn: "https://trytimeli.com/",
    imagePath: require("../../img/projects/Web/Timeli.png"),
  },
  {
    id: "UX/UI",
    name: "Netflix India Homepage UI",
    "tech-name": {
      "tech-name1": "HTML",
      "tech-name2": "CSS",
      "tech-name3": "Javascript",
    },
    description: "Netflix UI using HTML, CSS, and JavaScript.",
    codebtn: "https://github.com/utkkkarshhh/Netflix-UI",
    demobtn: "https://utkkkarshhh.github.io/Netflix-UI/",
    imagePath: require("../../img/projects/UI/NetflixUI.png"),
  },
  {
    id: "UX/UI",
    name: "Classic Facebook Login Page UI",
    "tech-name": {
      "tech-name1": "HTML",
      "tech-name2": "CSS",
      "tech-name3": "Javascript",
    },
    description: "Facebook UI design with HTML, CSS, and JavaScript.",
    codebtn: "https://github.com/utkkkarshhh/social-media",
    demobtn: "https://social-media-sigma-ruddy.vercel.app/",
    imagePath: require("../../img/projects/UI/FacebookUI.png"),
  },
  {
    id: "UX/UI",
    name: "Twitter Homepage UI",
    "tech-name": {
      "tech-name1": "HTML",
      "tech-name2": "CSS",
      "tech-name3": "Javascript",
    },
    description: "Twitter UI clone with HTML, CSS, and JavaScript.",
    codebtn: "https://github.com/utkkkarshhh/Twitter-UI-Clone",
    demobtn: "https://utkkkarshhh.github.io/Twitter-UI-Clone/",
    imagePath: require("../../img/projects/UI/TwitterUI.png"),
  },
  {
    id: "UX/UI",
    name: "Google Homepage UI",
    "tech-name": {
      "tech-name1": "HTML",
      "tech-name2": "CSS",
      "tech-name3": "Javascript",
    },
    description: "Google search UI recreated using HTML, CSS, and JavaScript.",
    codebtn: "https://github.com/utkkkarshhh/google-homepage-ui",
    demobtn: "https://utkkkarshhh.github.io/google-homepage-ui/",
    imagePath: require("../../img/projects/UI/GoogleUI.png"),
  },
  {
    id: "UX/UI",
    name: "WaterMyPlants Web App UI (IOT Project)",
    "tech-name": {
      "tech-name1": "CSS",
      "tech-name2": "NodeJS",
      "tech-name3": "Figma",
    },
    description:
      "IOT project UI for remotely watering plants, designed with CSS and Figma.",
    demobtn:
      "https://www.figma.com/file/6XRSDSyZfZHj5oR78upQwG/WaterMyPlants?type=design&node-id=0%3A1&mode=design&t=FnqTtE8t5k2NhvPN-1",
    imagePath: require("../../img/projects/UI/WaterMyPlantsUI.png"),
  },
  {
    id: "UX/UI",
    name: "Graviti Google Maps Locater (React.js)",
    "tech-name": {
      "tech-name1": "ReactJs",
      "tech-name2": "CSS",
      "tech-name3": "GoogleMaps API",
    },
    description:
      "Google Maps locator app built with React.js, CSS, and Google Maps API.",
    codebtn: "https://github.com/utkkkarshhh/graviti-assignment",
    demobtn: "https://graviti-assignment-red.vercel.app/",
    imagePath: require("../../img/projects/UI/Graviti.png"),
  },
  {
    id: "Others",
    name: "WaterMyPlants(IOT)",
    "tech-name": {
      "tech-name1": "Python",
      "tech-name2": "Arduino",
      "tech-name3": "Kiwi",
    },
    description:
      "IOT project for remotely watering plants, developed with Python, Arduino, and Kiwi.",
    codebtn: "https://github.com/utkkkarshhh/WaterMyPlants",
    demobtn: "https://github.com/utkkkarshhh/WaterMyPlants",
    imagePath: require("../../img/projects/Other/WaterMyPlantsIOT.jpg"),
  },
];

export let techstack = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <IoLogoJavascript /> },
  { name: "Bootstrap", icon: <BsBootstrapFill /> },
  { name: "jQuery", icon: <DiJqueryLogo /> },
  { name: "NodeJS", icon: <FaNodeJs /> },
  { name: "ExpressJS", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "SQL", icon: <SiMysql /> },
  { name: "React", icon: <FaReact /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Java", icon: <FaJava /> },
];
