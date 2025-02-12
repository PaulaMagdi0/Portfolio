import { useEffect } from "react";
import initScrollReveal from "../scripts/scrollReveal";
import { targetElements, defaultProps } from "../data/scrollRevealConfig";

export const About = ({ data }) => {
  useEffect(() => {
    initScrollReveal(targetElements, defaultProps);
  }, []);

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About me</h2>
        <div className="row about-wrapper">
          <div className="about-wrapper__info">
            <p className="about-wrapper__info-text justify_text">
              {data.description}
            </p>
            <span className="d-flex mt-3 jus_center">
              <a
                target="_blank"
                className="cta-btn cta-btn--resume xl_fontSize"
                href={data.resumeLink}
                rel="noreferrer"
              >
                View Resume
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
