import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";

function Home() {
  return (
    <header>
      <section>
        <h2 className="title">Edd-Arlo Garcia</h2>

        <video autoPlay loop muted className="video">
          <source src="/images/video.mp4" type="video/mp4" />
        </video>
      </section>
      <nav className="navbar">
        <Link className="navEl" to="/">
          Home
        </Link>
        <Link className="navEl" to="/about">
          About
        </Link>
        <Link className="navEl" to="/project">
          Project
        </Link>
      </nav>
      <footer className="contact">
        <a href="https://github.com/Eddielo26" className="contactEl">
          <FaGithub />
        </a>
        <a href="mailto: eddarlostudy@yahoo.com" className="contactEl">
          <AiOutlineMail />
        </a>
        <a
          href="https://www.linkedin.com/in/edd-arlo-garcia-60398895/"
          className="contactEl"
        >
          <AiFillLinkedin />
        </a>
        <a className="contactEl">
          <IoIosPaper />
        </a>
      </footer>
    </header>
  );
}

export default Home;
