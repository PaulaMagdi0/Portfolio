import { useEffect } from "react";
import initScrollReveal from "../scripts/scrollReveal";
import initTiltEffect from "../scripts/tiltAnimation";
import { targetElements, defaultProps } from "../data/scrollRevealConfig";

const ProjectItem = ({ project, index }) => {
  return (
    <div className="row d-flex justify-content-between">
      <div className="col-lg-4 col-sm-12">
        <div className="project-wrapper__text">
          <h3 className="project-wrapper__text-title">{project.title}</h3>
          <div>
            <p className="mb-4 justify_text">{project.description}</p>
          </div>
          <a
            target="_blank"
            className="cta-btn cta-btn--hero"
            href={project.liveLink}
            rel="noreferrer"
          >
            See Live
          </a>
          <a
            target="_blank"
            className="cta-btn text-color-main"
            href={project.sourceCode}
            rel="noreferrer"
          >
            Source Code
          </a>
        </div>
      </div>
      <div className="col-lg-7 col-sm-12 align-content-center">
        <div className="project-wrapper__image">
          <a href={project.liveLink} target="_blank" rel="noreferrer">
            <div
              data-tilt
              data-tilt-max="4"
              data-tilt-glare="true"
              data-tilt-max-glare="0.5"
              className="thumbnail rounded js-tilt"
            >
              <img
                alt={`${project.title}`}
                className="img-fluid"
                src={project.image}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export const Projects = ({ projects }) => {
  useEffect(() => {
    initScrollReveal(targetElements, defaultProps);
    initTiltEffect();
  }, []);

  return (
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title dark-blue-text">Projects</h2>
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
