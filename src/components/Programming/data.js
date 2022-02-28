import marcipeSPA from "../../assets/marecipe-spa.png";
import weatherMui from "../../assets/weather-project.png";
import netflixReplica from "../../assets/netflix-replica.png";
import marecipe from "../../assets/marecipe.png";
import hackathon from "../../assets/hackathon.png";
import merntask from "../../assets/mern-task.png";
import portfolio from "../../assets/portfolio.png";

const pdata = [
  {
    id: 0,
    title: "MaRecipe SPA",
    image: marcipeSPA,
    description:
      "Macro Recipe single page application that allows users to granularly control the macro nutrients of the ingredients. Work in progress! If you would like a demo, please contact me!",
    repoUrl: "https://github.com/michaelhtran120/MaRecipe-SPA",
    liveUrl: null,
    toolkit: ["React", "Redux", "Typescript", "Bootstrap", "Sass", "Jest"],
  },
  {
    id: 1,
    title: "MERN Task Manager",
    image: merntask,
    description:
      "Full stack application focused on praciticing my back-end knowledge of Express and MongoDB. Also focused on practicing utilizing Redux state management, but this time using Redux Toolkit library",
    repoUrl: "https://github.com/michaelhtran120/MERN-Task",
    liveUrl: "https://mern-stack-task-manager.herokuapp.com/",
    toolkit: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 2,
    title: "Portfolio",
    image: portfolio,
    description:
      "The current webpage you are on is my portfolio. Quick build as previous website was expiring. Will update time to time to test new UI features.",
    repoUrl: "https://github.com/michaelhtran120/Portfolio",
    liveUrl: null,
    toolkit: ["React", "Bootstrap", "Sass"],
  },
  {
    id: 3,
    title: "Weather App",
    image: weatherMui,
    description:
      "Weather App created with React and Material UI. \n This was a fun little side project to practice using React and learn Material UI and Chart.js.",
    repoUrl: "https://github.com/michaelhtran120/MUI-React-Weather-App",
    liveUrl: "https://michaelhtran120.github.io/MUI-React-Weather-App/",
    toolkit: ["React", "Material UI", "Chart.js"],
  },
  {
    id: 908,
    title: "MaRecipe Static Web Page",
    image: marecipe,
    description: "Portfolio project showcasing the use of Bootstrap in designing a static webpage for MaRecipe application",
    repoUrl: "https://github.com/michaelhtran120/MaRecipe",
    liveUrl: "https://michaelhtran120.github.io/MaRecipe/",
    toolkit: ["HTML", "CSS", "Sass", "Javascript", "jQuery", "Bootstrap"],
  },
  {
    id: 812,
    title: "Mintbean Junior Dev Hackathon",
    image: hackathon,
    description: "Collaborated with another developer in developing a drawing application utilizing the Canvas API. ",
    repoUrl: "https://github.com/Yehan20/Hackathon-Drawing-App",
    liveUrl: "https://squiggle-drawing-app.netlify.app/",
    toolkit: ["HTML", "CSS", "Sass", "Javascript", "Bootstrap"],
  },
  {
    id: 999,
    title: "Netflix Replica",
    image: netflixReplica,
    description:
      "Netflix replica created using React and Firebase. \n The project requirement was to replicate one of my favorite websites as close as possible.",
    repoUrl: "https://github.com/michaelhtran120/netflix-replica",
    liveUrl: "https://michaelhtran120.github.io/netflix-replica/",
    toolkit: ["React", "Firebase"],
  },
];

export default pdata;
