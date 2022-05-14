import React from "react";

function About() {
    return (
        <>
        <section className="text-white pt-4">
        <h2>About Me</h2></section>
        <section className="about-container">
          </section>
          <section className= "text-white pt-4">
   
    <div className="bio container">
        <p className=" aboutMe text-white">
            Hi my name is Edd-arlo Garcia, I'm currently employeed as a Respiratory Therapists and a part-time
                    student
                    for web development.
                    On my free time I enjoy outdoor activities like camping, snowboarding, and basically anything 
                    I can take my family on.
        </p>
        <div className="aboutMe-img">
    <img src="/images/shaka.png" alt="" height='220'/>
        <a 
            href={process.env.PUBLIC_URL + "/Edd-Arlo-Garcia-RESUME.pdf"}
            target="_blank" rel="noreferrer"
          >
    <button className="dl btn btn-primary">Download CV</button>
          </a>
    </div>
        </div>
      
    </section>
        </>
      
    )
}

export default About;