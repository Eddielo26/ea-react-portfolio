import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
// import 'bootstrap/dist/css/bootstrap.min.css';

function Project(props) {
  return (
    <div>
      <div className="container">
        {props.projects.map((project) => (
          <div className="">
            <div className="">
              <div className="card shadow">
                <p className="card-header bg-info" key={project.id}>
                  {project.title}
                </p>
                <a href={project.live} target="_blank" rel="noreferrer">
                  <img
                    src={process.env.PUBLIC_URL + project.image}
                    alt="Placeholder image"
                    height={200}
                    width={246}
                  />
                </a>
                <div className="link px-2">
                    <div>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub size={20} />
                      
                    </a>
                    </div>
                  <div>
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <CgWebsite size={20} />
                    </a>
                    </div>
                    </div>
                {/* <p className="describe">{project.description}</p> */}
              </div>
                  
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
