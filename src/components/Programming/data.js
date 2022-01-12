import marcipeSPA from "../../assets/marecipe-spa.png";
import weatherMui from "../../assets/weather-project.png";
import netflixReplica from "../../assets/netflix-replica.png";
import marecipe from "../../assets/marecipe.png";
import hackathon from "../../assets/hackathon.png";

const pdata = [
  {
    id: 1,
    title: "MaRecipe SPA",
    image: marcipeSPA,
    description:
      "Macro Recipe single page application that allows users to granularly control the macro nutrients of the ingredients. Work in progress!",
    repoUrl: "https://github.com/michaelhtran120/MaRecipe-SPA",
    liveUrl: null,
    toolkit: ["React", "Redux", "Typescript", "Bootstrap", "Sass", "Jest"]
  },
  {
    id: 2,
    title: "Weather w/ MUI",
    image: weatherMui,
    description:
      "Weather App created with React and Material UI. \n This was a fun little side project to practice using React and learn Material UI.",
    repoUrl: "https://github.com/michaelhtran120/MUI-React-Weather-App",
    liveUrl: "https://michaelhtran120.github.io/MUI-React-Weather-App/",
    toolkit: ["React", "Material UI", "Chart.js"]
  },
  {
    id: 3,
    title: "Netflix Replica",
    image: netflixReplica,
    description:
      "Netflix replica created using React and Firebase. \n The project requirement was to replicate one of my favorite websites as close as possible.",
    repoUrl: "https://github.com/michaelhtran120/netflix-replica",
    liveUrl: "https://michaelhtran120.github.io/netflix-replica/",
    toolkit: ["React", "Firebase"]
  },
  {
    id: 4,
    title: "MaRecipe Static Web Page",
    image: marecipe,
    description: "Portfolio project showcasing the use of Bootstrap in designing a static webpage for MaRecipe application",
    repoUrl: "https://github.com/michaelhtran120/MaRecipe",
    liveUrl: "https://michaelhtran120.github.io/MaRecipe/",
    toolkit: ["HTML", "CSS", "Sass", "Javascript", "jQuery", "Bootstrap"]
  },
  {
    id: 5,
    title: "Mintbean Junior Dev Hackathon",
    image: hackathon,
    description: "Developed a drawing application using Canvas API. Collaborated with another developer ",
    repoUrl: "https://github.com/Yehan20/Hackathon-Drawing-App",
    liveUrl: "https://squiggle-drawing-app.netlify.app/",
    toolkit: ["HTML", "CSS", "Sass", "Javascript", "Bootstrap"]
  }
];

export default pdata;
