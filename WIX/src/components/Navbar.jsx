import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import "./Navbar.css";

function Navbar({ mode, setMode }) {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="container">
      <div class="nav">
        <div class="logo">
          <span></span>
          <Link to="/">
            {" "}
            <h2>Nicol Rider</h2>
          </Link>
          <p>Editor</p>
        </div>
        <div class="links">
          <Link to="/project">Projects</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div class="card">
          <div>
            <input
              onClick={() => setMode(!mode)}
              type="checkbox"
              class="checkbox"
              id="checkbox"
            />
            <label for="checkbox" class="label">
              <div className="fa-sun">
                {" "}
                <BsFillSunFill />
              </div>
              <div className="fa-moon">
                {" "}
                <BsFillMoonStarsFill />
              </div>
              <div class="ball"></div>
            </label>
          </div>
        </div>

        <div className="nav_bar">
          <nav ref={navRef} className="nav_links">
          <div onClick={showNavbar}>  <Link to="/project">Projects</Link></div>
          <div onClick={showNavbar}>  <Link to="/Resume">Resume</Link></div>
          <div onClick={showNavbar}>  <Link to="/Contact">Contact</Link></div>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <MdClose />
            </button>
          </nav>
          <button className="nav-btn m_black" onClick={showNavbar}>
            <AiOutlineBars />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
