import React from "react";
import "./FeaturedBox.css";
export function FeaturedElement(props) {
  return (
    <div className="featuredBox-content">
      <div className="f-box-image">
        <img src={props.fBoxImage} alt="Featured-image" width="500" height="300"/>
      </div>
      <div className="f-box-story">
        <div className="f-box-story-head center">
          <h1>{props.fBoxStoryHead}</h1>
        </div>
        <div className="featuredBox-text">
          <p>{props.fBoxText}</p>
        </div>
      </div>
      <div className="div-btn featuredBox-btn center">
        <a href="">LEARN MORE</a>
      </div>
    </div>
  );
}
