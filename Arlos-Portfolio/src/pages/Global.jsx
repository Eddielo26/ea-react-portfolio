import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
import me from "../Assets/images/me.png";
import { Image } from "../components/image.styles";
import "bootstrap/dist/css/bootstrap.min.css";

function Global() {
  return (
    <section>
      <header>
        <video autoPlay loop muted className="video">
          <source src="/images/video.mp4" type="video/mp4" />
        </video>
        <nav className="navbar navbar-dark bg-black nav-pills justify-content-end  px-2">
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
        </nav>
      </header>

      <footer className="contact mt-auto">
        <a
          href="https://github.com/Eddielo26"
          className="contactEl"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={25} />
        </a>
        <a className="contactEl" href="mailto: eddarlostudy@yahoo.com">
          <AiOutlineMail size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/edd-arlo-garcia-60398895/"
          className="contactEl"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin size={25} />
        </a>
        <a
          className="contactEl"
          href={process.env.PUBLIC_URL + "/Edd-Arlo-Garcia-RESUME.pdf"}
          target="_blank"
          rel="noreferrer"
        >
          <IoIosPaper size={25} />
        </a>
      </footer>
    </section>
  );
}

export default Global;
