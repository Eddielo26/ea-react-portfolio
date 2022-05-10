import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
// import 'bootstrap/dist/css/bootstrap.min.css';

function Project(props) {
  return (
    <div>
      <div className="card-column">
        {props.projects.map((project) => (
          <div className="">
            <div className="">
              <div className="card shadow">
                <p className="card-header bg-primary" key={project.id}>
                  {project.title}
                </p>
                <a href={project.live} target="_blank" rel="noreferrer">
                  <img
                    src={process.env.PUBLIC_URL + project.image}
                    alt="Placeholder image"
                    height={65}
                    width={118.2}
                  />
                </a>
                    <a className=""
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub size={12} />
                    </a>
                    <a className='look'
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <CgWebsite size={12} />
                    </a>
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
