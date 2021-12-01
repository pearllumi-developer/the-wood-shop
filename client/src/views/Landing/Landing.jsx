import "./Landing.css";

const Landing = () => {
  return (
    <section id="landing" className="landing-container">
      <div className="content-wrapper">
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
            Engaging our community, creating <br/>good vibes, and serving up culture, <br/>one
            cut at a time.
          </p>
        </div>
        <div className="landing-btn-container">
          <button className="landing-btn" onClick={() => window.location.href="https://online.getsquire.com/book/the-wood-shop-tallahassee/professional"}>BOOK YOUR CUT</button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
