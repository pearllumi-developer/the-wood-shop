import logo from "../../asset/images/logos/woodshoplogo.png";
import FaceBook from "../../asset/images/logos/Facebook.png";
import Yelp from "../../asset/images/logos/Yelp.png";
import Instagram from "../../asset/images/logos/instagram.png";
import "./MobileNav.css";

const MobileNav = () => {
  return (
    <div className="mobile-nav-container">
      <div className="burger">
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </div>
      <div className="mobile-nav-logo">
        <img src={logo} alt="The WoodShop" />
      </div>
      <div className="nav-wrapper">
        <div className="mobile-nav-logo-inner">
          <img src={logo} alt="The WoodShop" />
        </div>
        <div className="burger-close">
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
        </div>
        <div className="mobile-nav-links">
          <ul>
            <h3>MENU</h3>
            <li>OUR ROOTS</li>
            <li>WHERE WE ARE</li>
            <li>THE CREW</li>
            <li>THE PROOF</li>
          </ul>
        </div>
        <div>
          <button className="mobile-nav-btn">BOOK YOUR CUT</button>
        </div>
        <div className="mobile-nav-icons">
          <img src={Instagram} alt="icon for IG" />
          <img src={FaceBook} alt="icon for FB" />
          <img src={Yelp} alt="icon for reviews" />
        </div>
        <div>
          <p>
            <strong>Governor's Square Mall</strong>
          </p>
          <p>1500 Apalachee Pkwy</p>
          <p>Tallahassee, FL 32301</p>
          <p>Next to JCPenny</p>
        </div>
        <div className="mobile-nav-phone">
          <p>(850) 739-2209</p>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
