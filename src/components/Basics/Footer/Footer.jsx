import React from "react";
import "./Footer.css";
export function Footer() {
    const logo = "https://user-images.githubusercontent.com/60150901/118692574-d7e0c780-b827-11eb-8adb-5650c065b725.png"
  return (
    <footer id="footer">
      <div className="footer">
        <div className="f-1">
          <div className="footer-logo center">
            <img src={logo} alt="logo" width="90"/>
            <h2>calisthenxs</h2>
          </div>
        </div>
        <div className="f-2">
          <h1>PROGRAMS</h1>
          <ul>
            <li>
              <a href="#">Calisthenics Program</a>
            </li>
            <li>
              <a href="#">Stretching And Mobility</a>
            </li>
            <li>
              <a href="#">Nutrition Guide</a>
            </li>
            <li>
              <a href="#">Weighted Calisthenics</a>
            </li>
            <li>
                <a href="">Handstand Program</a>
            </li>
            <li>
                <a href="">Muscle Up Program</a>
            </li>
          </ul>
        </div>
        <div className="f-3">
          <h1>BLOG</h1>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Stretching & pain</a>
            </li>
            <li>
              <a href="#">Nutrition</a>
            </li>
            <li>
              <a href="#">Lifestyle & motivation</a>
            </li>
          </ul>
        </div>
        <div className="f-4">
          <h1>RULES</h1>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright center">
        <p className="footer-copyright-line">
          Copyright&copy; calisthenxs 2020 - 2025. All Right Reserved. Made by <u><a href="https://github.com/WhyRedX">WhyRedX</a></u>
        </p>
      </div>
    </footer>
  );
}