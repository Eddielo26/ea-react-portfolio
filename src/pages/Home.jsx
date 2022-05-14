import React from "react";
import aloha from '../Assets/images/Aloha.png';
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <section className= "text-white pt-4">
    <h2 className="name">Edd-Arlo Garcia</h2> 
    <h2>Full Stack Developer</h2>
        <img className="aloha"  src={aloha} alt="aloha"/>
      
    </section>
  );
}

export default Home;
