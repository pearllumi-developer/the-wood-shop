import "./Landing.css";

const Landing = () => {
  return (
    <section id="section" className="landing-container">
      <div className="landing-title">
        <p>
          CUTS
          <br />
          CULTURE
          <br />
          COMMUNITY
        </p>
      </div>
      <div className="landing-caption">
        <p>
          Creative communities, creating <br />
          vibes, and serving up culture,
          <br /> one cut at a time.
        </p>
      </div>
      <div className='landing-btn-container'>
        <button className='landing-btn'>BOOK YOUR CUT</button>
      </div>
    </section>
  );
};

export default Landing;
