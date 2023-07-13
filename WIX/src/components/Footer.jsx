import React from 'react'
import {BsTwitter} from "react-icons/bs"

import "./Footer.css"
function Footer() {
  return (
    <div className='container_div'>
      <footer>
        <div className="footer">
          <div className="footer-links3">

          <div>
              <h3>Phone</h3>
              <p class="mysite">+998919985845</p>
          </div>

          <div>
              <h3>Email</h3>
              <p class="mysite">info@mysite.com</p>
            </div>
            <div className="icon">
             <h3>   Follow me</h3>
             <h2>in <BsTwitter/></h2>
              </div>
            <div>
             
             <div>
             <p id="wix">
              © 2035 By Nicol Rider. <br />
              Powered and secured by <u>Wix</u>
            </p>
             </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer