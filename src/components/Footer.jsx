import { useEffect } from "react";
import initScrollReveal from "../scripts/scrollReveal";
import { targetElements, defaultProps } from "../data/scrollRevealConfig";

export const Footer = ({ social }) => {
  useEffect(() => {
    initScrollReveal(targetElements, defaultProps);
  }, []);

  return (
    <footer className="footer navbar-static-bottom">
      <div className="container">
        <a href="#top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div className="social-links">
          <a href={social.facebook} target="_blank" rel="noreferrer">
            <i className="fa fa-facebook fa-inverse"></i>
          </a>
          <a href={social.linkedin} target="_blank" rel="noreferrer">
            <i className="fa fa-linkedin fa-inverse"></i>
          </a>
          <a href={social.github} target="_blank" rel="noreferrer">
            <i className="fa fa-github fa-inverse"></i>
          </a>
          <a href={social.leetcode} target="_blank" rel="noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
              alt="LeetCode"
              width="32"
              height="32"
              style={{ filter: "invert(100%)" }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
