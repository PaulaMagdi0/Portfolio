import React from "react";

const Hero = ({ data }) => {
  return (
    <section id="hero" className="jumbotron">
      <div className="container">
        <h1 className="hero-title">
          Hi, my name is <span className="text-color-main">{data.name}</span>
          <br />
          <p id="subTitle">{data.title}</p>
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
