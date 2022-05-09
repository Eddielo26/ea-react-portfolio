import React from "react";
import me from "../Assets/images/me.png"
import {Image} from "../components/image.styles";



function About() {
    return (
        <div>
        <Image src={me} alt="me"/>
        <p>
            Hi my name is Edd-arlo Garcia, I'm currently employeed as a Respiratory Therapists and a part-time
                    student
                    for web development.
                    On my free time I enjoy outdoor activities like camping, snowboarding, and basically anything 
                    I can take my family on.
        </p>
        </div>
    )
}

export default About;