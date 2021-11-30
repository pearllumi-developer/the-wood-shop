import { useState } from "react";
import logo from "../../asset/images/logos/woodshoplogo.png";
import FaceBook from "../../asset/images/logos/Facebook.png";
import Yelp from "../../asset/images/logos/Yelp.png";
import Instagram from "../../asset/images/logos/instagram.png";
import "./MobileNav.css";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlide = () => {
    setIsOpen(!isOpen);
  };

  // const handleAnimation = () => {
  //   const navLinks = document.querySelectorAll('mobile-nav-links li')
  //   navLinks.forEach((link, idx) => {
  //     link.style.animation = `navLinkFade 0.5s ease forwards ${idx / 7 + 2}s`
  //   })
  // }

  return (
    <div className="mobile-nav-container">
      <div className="burger" onClick={toggleSlide}>
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </div>
      <div className="mobile-nav-logo">
        <img src={logo} alt="The WoodShop" />
      </div>
      <div className={isOpen ? "nav-wrapper mobile-nav-active" : "nav-wrapper"}>
        <div className="mobile-nav-logo-inner">
          <img src={logo} alt="The WoodShop" />
        </div>
        <div className="burger-close" onClick={toggleSlide}>
          <div className="lineA" />
          <div className="lineB" />
          <div className="lineC" />
        </div>
        <div className={isOpen ? "mobile-nav-links fade" : "mobile-nav-links"}>
          <ul>
            <h3>MENU</h3>
            <li>
              <a href="#ourRoots" onClick={toggleSlide}>
                OUR ROOTS
              </a>
            </li>
            <li>
              <a href="#whatWeDo" onClick={toggleSlide}>
                WHAT WE DO
              </a>
            </li>
            <li>
              <a href="#whereWeAre" onClick={toggleSlide}>
                WHERE WE ARE
              </a>
            </li>
            <li>
              <a href="#theCrew" onClick={toggleSlide}>
                THE CREW
              </a>
            </li>
            <li>
              <a href="#theProof" onClick={toggleSlide}>
                THE PROOF
              </a>
            </li>
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
        <div><a href="https://maps.apple.com/maps?q=1500apalachee+pkwy+tallahassee+fl+32301">
          <p>
            <strong>Governor's Square Mall</strong>
          </p>
          <p>1500 Apalachee Pkwy</p>
          <p>Tallahassee, FL 32301</p>
          <p>Next to JCPenny</p>
          </a>
        </div>
        <div className="mobile-nav-phone">
          <a href="tel:8507392209"><p>(850) 739-2209</p></a>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
