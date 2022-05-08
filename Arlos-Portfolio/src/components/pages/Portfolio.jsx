import React from "react";
import Project from "./Project";

const projects = [
    {
        id: 0,
        title: "KLEC Inc. Pokedex",
        image: "/images/pokedex.png",
        description: "",
        repo: "https://github.com/VAalchemist/KLEC-search-inc",
        live: "https://vaalchemist.github.io/KLEC-search-inc/",
      },
    {
        id: 1,
        title: "Duty Call",
        image: "/images/dutycall.png",
        description: "",
        repo: "https://github.com/VAalchemist/CASK-inc",
        live: "https://young-thicket-71102.herokuapp.com/index",
      },
    {
        id: 2,
        title: "Budget Tracker",
        image: "/images/budgettracker.png",
        description: "",
        repo: "https://github.com/Eddielo26/EA-Budget-Tracker",
        live: "https://morning-citadel-50858.herokuapp.com/",
      },
    {
        id: 0,
        title: "Weather Dashboard",
        image: "/images/weather.png",
        description: "",
        repo: "https://github.com/Eddielo26/EA-Weather-Dashboard",
        live: "https://eddielo26.github.io/EA-Weather-Dashboard/",
      },
    {
        id: 0,
        title: "Daily Planner",
        image: "/images/planner.png",
        description: "",
        repo: "https://github.com/Eddielo26/EA-Work-day-scheduler",
        live: "https://eddielo26.github.io/EA-Work-day-scheduler/",
      },
    {
        id: 0,
        title: "Quiz",
        image: "/images/quiz.png",
        description: "",
        repo: "https://github.com/Eddielo26/EA-Code-Quiz",
        live: "https://eddielo26.github.io/EA-Code-Quiz/",
      },
]
function Portfolio() {
    return (
      <div>
        <p className="content is-medium">Portfolio</p>
        <hr />
  
        <Project projects={projects} />
      </div>
    );
  }
  
  export default Portfolio;