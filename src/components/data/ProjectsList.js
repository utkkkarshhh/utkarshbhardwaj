import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaJava } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiRedux } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BsBootstrapFill } from "react-icons/bs";
import { DiJqueryLogo } from "react-icons/di";

export const data = [
  {
    id: "UI Clones",
    name: "Netflix India Homepage UI",
    "tech-name": {
      "tech-name1": "NodeJs",
      "tech-name2": "ExpressJS",
      "tech-name3": "CSS",
    },
    description:
      "Designed Netflix India Homepage UI using HTML, CSS and JavaScript.",
    codebtn: "https://github.com/utkkkarshhh/Netflix-UI",
    demobtn: "https://utkkkarshhh.github.io/Netflix-UI/",
    imagePath: require("../../img/projects/img-1.png"),
  },
  {
    id: "UI Clones",
    name: "Personal Portfolio",
    "tech-name": {
      "tech-name1": "ReactJS",
      "tech-name2": "NodeJS",
      "tech-name3": "JavaScript",
    },
    description:
      "Designed and Developed Personal Portfoilio Website using ReactJS",
    codebtn: "https://github.com/utkkkarshhh/utkkkarshhh",
    demobtn: "https://github.com/utkkkarshhh/utkkkarshhh",
    imagePath: require("../../img/projects/img-2.png"),
  },
  {
    id: "MERN",
    name: "Water My Plants",
    "tech-name": {
      "tech-name1": "Python",
      "tech-name2": "Arduino",
      "tech-name3": "Kiwi",
    },
    description:
      "Water My Plants is an IOT based project which allows an user to water his plants remotely.",
    codebtn: "https://github.com/utkkkarshhh/WaterMyPlants",
    demobtn: "https://github.com/utkkkarshhh/WaterMyPlants",
    imagePath: require("../../img/projects/img-3.jpg"),
  },
  {
    id: "UX/UI",
    name: "UX/UI",
    "tech-name": {
      "tech-name1": "Python",
      "tech-name2": "Arduino",
      "tech-name3": "Kiwi",
    },
    description:
      "Water My Plants is an IOT based project which allows an user to water his plants remotely.",
    codebtn: "https://github.com/utkkkarshhh/WaterMyPlants",
    demobtn: "https://github.com/utkkkarshhh/WaterMyPlants",
    imagePath: require("../../img/projects/img-3.jpg"),
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
