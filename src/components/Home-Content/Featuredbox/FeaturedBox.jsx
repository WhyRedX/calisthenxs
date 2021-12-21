import React from "react";
import FEATURED_CONTENT_DATA from "../../../data/FEATURED_CONTENT_DATA";
import { FeaturedElement } from "./FeaturedElement";

const featureFunction = (element) => {
  return (
    <FeaturedElement
      fBoxImage={element.fBoxImage}
      fBoxStoryHead={element.fBoxStoryHead}
      fBoxText={element.fBoxText}
    />
  );
};

export function FeaturedBox() {
  return (
    <section id="featuredBox">
      <div className="featuredBox-container center">
        <div className="featuredBox-head">
          <h1> Do you have a Program? We Do! ready to <span>START</span>.</h1>
        </div>
        <div className="featuredBox-content-container">
          {FEATURED_CONTENT_DATA.map(featureFunction)}
        </div>
      </div>
    </section>
  );
}
