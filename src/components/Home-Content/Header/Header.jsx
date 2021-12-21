import React from "react";
import { Link } from "react-scroll"
import "./Header.css";
export function Header() {
  const video =
    "https://user-images.githubusercontent.com/60768884/117863996-f6881100-b2b1-11eb-9456-83e656556154.mp4";
  return (
    <section id="header-section">
    <header className="header">
      <video autoPlay loop muted playsInline width="100%" height="100%">
        <source src={video} type="video/mp4" />
      </video>
      {/* <div className="see-more-scroll center">
        <Link to="featuredBox" smooth={true} duration={1500}>
         SEE MORE
        <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>
        </Link>
      </div> */}
    </header>
    <div className="motto">
      <h1>TAKE ACTION - <span>GET RESULTS</span></h1>
    </div>
    </section>
  );
}
