import React from "react";
import Project from "./Project";



const projects = [
    {
        
        title: "KLEC Inc. Pokedex",
        image: "/images/pokedex.png",
        // description: "Find pokemon within your area",
        repo: "https://github.com/VAalchemist/KLEC-search-inc",
        live: "https://vaalchemist.github.io/KLEC-search-inc/",
      },
    {
        
        title: "Duty Call",
        image: "/images/dutycall.png",
        // description: "Hire a handyman",
        repo: "https://github.com/VAalchemist/CASK-inc",
        live: "https://young-thicket-71102.herokuapp.com/index",
      },
    {
       
        title: "Budget Tracker",
        image: "/images/budgettracker.png",
        description: "Keep your finances in order",
        repo: "https://github.com/Eddielo26/EA-Budget-Tracker",
        live: "https://morning-citadel-50858.herokuapp.com/",
      },
    {
        
        title: "Weather Dashboard",
        image: "/images/weather.png",
        // description: "Search up weather conditions",
        repo: "https://github.com/Eddielo26/EA-Weather-Dashboard",
        live: "https://eddielo26.github.io/EA-Weather-Dashboard/",
      },
    {
        
        title: "Daily Planner",
        image: "/images/planner.png",
        // description: "Plan your day accordingly",
        repo: "https://github.com/Eddielo26/EA-Work-day-scheduler",
        live: "https://eddielo26.github.io/EA-Work-day-scheduler/",
      },
    {
        
        title: "Quiz",
        image: "/images/quiz.png",
        // description: "Test your knowledge",
        repo: "https://github.com/Eddielo26/EA-Code-Quiz",
        live: "https://eddielo26.github.io/EA-Code-Quiz/",
      },
]
function Portfolio() {
    return (
      
      <div className = "container ">
        <Project projects={projects} />
      </div>
    
    );
  }
  
  export default Portfolio;