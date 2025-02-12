import { useEffect } from "react";
import initScrollReveal from "../scripts/scrollReveal";
import { targetElements, defaultProps } from "../data/scrollRevealConfig";

export const Hero = ({ data }) => {
  useEffect(() => {
    initScrollReveal(targetElements, defaultProps);
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <div className="container">
        <h1 className="hero-title">
          Hi, my name is{" "}
          <span className="text-color-main hero-title">{data.name}</span>
          <br />
          <p id="subTitle" className="hero-subtitle">{data.subtitle}</p>
        </h1>
        <p className="hero-cta">
          <a className="cta-btn cta-btn--hero" href="#about">
            Know more
          </a>
        </p>
      </div>
    </section>
  );
};
