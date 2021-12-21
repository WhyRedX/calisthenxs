import React from "react";
import "./Platform.css";
export function Platform() {
  const paltformImage =
    "https://user-images.githubusercontent.com/60150901/119233268-e0960e00-bb45-11eb-9cee-974962ec7829.png";
  return (
    <>
      <section id="platform-section">
        <div className="platform-container">
          <div className="platform-head">
            <h1>
              ALL CALIATHLETICS PROGRAMS ARE PROVIDED THROUGH OUR ONLINE
              PLATFORM
            </h1>
          </div>
          <div className="platform-content">
            <div className="platform-image">
              <img
                src={paltformImage}
                alt="platform-image"
                width="680"
                height="430"
              />
            </div>
            <div className="platform-text">
              <h1>YOU CAN ACCESS TO :</h1>
              <ul>
                <li>Offline PDF version</li>
                <li>Complete online video tutorials</li>
                <li>Online help from the Caliathletics Team</li>
                <li>No gym membership required</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="social-section-platform">
        <div className="social-platform-container center">
          <div className="social-platform-head">
            <h1>JOIN OUR <span>COMMUNITY</span></h1>
          </div>
          <div className="social-platform-content">
            <div className="social-icon-box center">
              <a href="https://www.instagram.com/" className="center">
                <i class="fa fa-instagram"></i>
                 <p>267,000+</p> 
              </a>
            </div>
            <div className="social-icon-box center">
              <a href="https://www.facebook.com/" className="center">
                <i class="fa fa-facebook-square"></i>
                <p>267,000+</p> 
              </a>
            </div>
            <div className="social-icon-box center">
              <a href="https://www.youtube.com/" className="center">
                <i class="fa fa-youtube"></i>
                <p>267,000+</p> 
              </a>
            </div>
            <div className="social-icon-box center">
              <a href="https://in.linkedin.com/" className="center">
                <i class="fa fa-linkedin"></i>
                <p>267,000+</p>  
              </a>
            </div>
            <div className="social-icon-box center">
              <a href="https://telegram.org/" className="center">
                <i class="fa fa-telegram"></i>
                <p>267,000+</p> 
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
