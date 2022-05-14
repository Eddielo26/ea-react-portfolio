import React from "react";
import Project from "./Project";

const projects = [
  {
    title: "KLEC Inc. Pokedex",
    image: "/images/pokedex.png",
    repo: "https://github.com/VAalchemist/KLEC-search-inc",
    live: "https://vaalchemist.github.io/KLEC-search-inc/",
  },
  {
    title: "Duty Call",
    image: "/images/dutycall.png",
    repo: "https://github.com/VAalchemist/CASK-inc",
    live: "https://young-thicket-71102.herokuapp.com/index",
  },
  {
    title: "Budget Tracker",
    image: "/images/budgettracker.png",
    repo: "https://github.com/Eddielo26/EA-Budget-Tracker",
    live: "https://morning-citadel-50858.herokuapp.com/",
  },
  {
    title: "Weather Dashboard",
    image: "/images/weather.png",
    repo: "https://github.com/Eddielo26/EA-Weather-Dashboard",
    live: "https://eddielo26.github.io/EA-Weather-Dashboard/",
  },
  {
    title: "Daily Planner",
    image: "/images/planner.png",
    repo: "https://github.com/Eddielo26/EA-Work-day-scheduler",
    live: "https://eddielo26.github.io/EA-Work-day-scheduler/",
  },
  {
    title: "Quiz",
    image: "/images/quiz.png",
    repo: "https://github.com/Eddielo26/EA-Code-Quiz",
    live: "https://eddielo26.github.io/EA-Code-Quiz/",
  },
];
function Portfolio() {
  return (
    <div>
    <section>
      <h2 className="text-white text-center pt-4">Portfolio</h2>
      <Project projects={projects} />
      </section>
    </div>
  );
}

export default Portfolio;
