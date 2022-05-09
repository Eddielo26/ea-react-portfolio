import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
// import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <header>
      <section>
      <nav className="navbar navbar-dark bg-black nav-pills justify-content-end px-2">
        <Link className="navTop text-white px-2" to="/">
          Home
        </Link>
        <Link className="navTop text-white px-2" to="/about">
          About
        </Link>
        <Link className="navTop text-white px-2" to="/project">
          Projects
        </Link>
        <Link className="navTop text-white px-2" to="/contact">
          Contact
        </Link>
        <Link className="navTop text-white px-2" to="/resume">
          Resume
        </Link>
      </nav>
        <h2 className="title">Edd-Arlo Garcia</h2>

        <video autoPlay loop muted className="video">
          <source src="/images/video.mp4" type="video/mp4" />
        </video>
      </section>
      <footer className="contact">
        <a href="https://github.com/Eddielo26" className="contactEl"
        target="_blank" rel="noreferrer">
          <FaGithub size={21}/>
        </a>
        <a href="mailto: eddarlostudy@yahoo.com">
          <AiOutlineMail size={21}/></a>
        <a
          href="https://www.linkedin.com/in/edd-arlo-garcia-60398895/"
          className="contactEl" target="_blank" rel="noreferrer"
        >
          <AiFillLinkedin size={21}/>
        </a>
        <a className="contactEl"
        href={process.env.PUBLIC_URL + "/Edd-Arlo-Garcia-RESUME.pdf"}
        target="_blank" rel="noreferrer">
          <IoIosPaper size={21}/>
        </a>
      </footer>
    </header>
  );
}

export default Home;
