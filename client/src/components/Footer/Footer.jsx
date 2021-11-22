import logo from "../../asset/images/logos/woodshoplogo.png";
import FaceBook from "../../asset/images/logos/Facebook.png";
import Yelp from "../../asset/images/logos/Yelp.png";
import Instagram from "../../asset/images/logos/instagram.png";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-container">
      <div>
        <p>
          The Wood Shop <br/>Inside The Tallahassee Mall next to Auntie Anne’s <br/>12345
          Tallahassee Lane Tallahassee, Florida 123456
        </p>
      </div>
      <div className='footer-logo'>
        <img src={logo} alt="The Wood Shop logo picture" />
        <p>Designed by PearlLumi Creative</p>
      </div>
      <div className='footer-icons'>
        <img src={Instagram} alt="link to instagram account" />
        <img src={FaceBook} alt="link to instagram account" />
        <img src={Yelp} alt="link to yelp reviews account" />
      </div>
    </section>
  );
};

export default Footer;
