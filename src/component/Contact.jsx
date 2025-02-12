const Contact = ({ data }) => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contact details</h2>
        <div className="contact-wrapper">
          <p className="contact-wrapper__text detail">{data.phone}</p>
          <a
            className="contact-wrapper__text detail"
            href={`mailto:${data.email}`}
          >
            {data.email}
          </a>
          <a
            target="_blank"
            className="cta-btn cta-btn--resume"
            href={`mailto:${data.email}`}
            rel="noreferrer"
          >
            Call to Action
          </a>
        </div>
      </div>
    </section>
  );
};
