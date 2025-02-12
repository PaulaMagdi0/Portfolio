const Footer = ({ social }) => {
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
        </div>
      </div>
    </footer>
  );
};
