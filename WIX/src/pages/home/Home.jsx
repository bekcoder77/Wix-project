import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
        <div class="header">
        <div class="header-img">
          <img src=".//assets/bg.png" alt="" />
        </div>
        <div class="header-info">
          <h1>Hello</h1>
          <h4>A Bit About Me</h4>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </p>
          <div class="links-2">
          <Link to="/resume"><div>Resume</div></Link>
          <Link to="/project"><div>Projects</div></Link>
          <Link to="/contact"><div>Contact</div></Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home