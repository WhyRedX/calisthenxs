import React from "react";
import "./About.css";
export function About() {
  const aboutImage_1 =
    "https://user-images.githubusercontent.com/60150901/119021641-4acf7700-b9bd-11eb-89f9-9564c84821a0.jpg";
  const aboutImage_2 =
    "https://user-images.githubusercontent.com/60150901/119021479-1956ab80-b9bd-11eb-8b42-2720eae608b0.png";

  return (
    <>
      <section id="about-section-1">
        <div className="about-content-1">
          <div className="about-image-1">
            <img src={aboutImage_1} alt="about-image" width="100%" />
          </div>
          <div className="about-text-1">
            <div className="about-head-1">
              <h2>TRAINING</h2>
              <h1>Calisthenics</h1>
            </div>
            <div className="about-paragraph-1">
              <p>
                At the School of Calisthenics we provide calisthenics programmes
                and training workouts to help you explore your physical
                potential; move better, get strong and have more fun with your
                training.
              </p>
              <p>
                We have a range of ways to help you start or continue your
                calisthenics journey. From learning online at your own pace,
                getting some extra support with our personalised online coaching
                packages or coming to see us face-to-face at a calisthenics
                workshop, retreat or class.
              </p>
            </div>
            <div className="div-btn about-btn-1 center">
              <a href="#">FIND OUT MORE</a>
            </div>
          </div>
        </div>
      </section>
      <section id="about-section-2">
        <div className="about-content-2">
          <div className="about-image-2">
            <img src={aboutImage_2} alt="about-image" width="100%" />
          </div>
          <div className="about-text-2">
            <div className="about-head-2">
              <h2>Regarding Calisthenics</h2>
            </div>
            <div className="about-paragraph-2">
              <p>
                Bodyweight exercise, also known as calisthenics, is the art of
                using one’s own bodyweight to build strength and muscle. Done
                progressively, this develops the body into insane power and
                athleticism. This is done with little to no equipment.
              </p>
              <ul>
                <li>
                  <span>Beautiful Strength</span> – The term calisthenics comes
                  from the Greek words kallos (beauty) and sthenos (strength).
                </li>
                <li>
                  <span>Beyond Cardio</span> – Although largely used for
                  endurance training nowadays, bodyweight methods were
                  historically used by soldiers to develop frightening power,
                  speed, and muscle.
                </li>
                <li>
                  <span>Time-tested</span> – These methods have been used for
                  millennia—long before modern gyms existed.
                </li>
              </ul>
              <p>
                That’s right. Believe it or not,
                <span>
                  {" "}
                  people were muscular and strong before the existence of
                  commercial gyms
                </span>
                . Before dumbbells were even a thought, our ancestors built
                powerful bodies through bodyweight fitness alone. These facts
                may surprise some people, but the true revelation may be that
                physical exercise itself has applications beyond building
                strength, gaining muscle, and losing fat. Because these goals
                are so popular, there is a seemingly endless supply of products
                and educational content to help people achieve them. However,
                there are applications beyond this.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
