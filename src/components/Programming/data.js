import marcipeSPA from "../../assets/marecipe-spa.png";
import weatherMui from "../../assets/weather-project.png";
import netflixReplica from "../../assets/netflix-replica.png";

const pdata = [
    {
        title: "MaRecipe SPA",
        image: marcipeSPA,
        description: "Macro Recipe single page application that allows users to granularly control the macro nutrients of the ingredients.",
        repoUrl: "https://github.com/michaelhtran120/MaRecipe-SPA",
        liveUrl: null,
        toolkit: ["React", "Redux", "Typescript", "Bootstrap", "Sass", "Jest"]
    },
    {
        title: "Weather w/ MUI",
        image: weatherMui,
        description:
            "Weather App created with React and Material UI. \n This was a fun little side project to practice using React and learn Material UI.",
        repoUrl: "https://github.com/michaelhtran120/MaRecipe-SPA",
        liveUrl: "https://github.com/michaelhtran120/MaRecipe-SPA",
        toolkit: ["React", "Material UI", "Chart.js"]
    },
    {
        title: "Netflix Replica",
        image: netflixReplica,
        description:
            "Netflix replica created using React and Firebase. \n The project requirement was to replicate one of my favorite websites as close as possible.",
        repoUrl: "https://github.com/michaelhtran120/netflix-replica",
        liveUrl: "https://michaelhtran120.github.io/netflix-replica/",
        toolkit: ["React", "Firebase"]
    }
];

export default pdata;
