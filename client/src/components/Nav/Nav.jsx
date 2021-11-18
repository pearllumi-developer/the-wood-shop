import logo from "../../asset/images/logos/woodshoplogo.png";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="The Wood Shop Barber Shop's Logo" />
      </div>
      <div className='ul-button-container'>
        <ul>
          <li>Our Roots</li>
          <li>What We Do</li>
          <li>Where We Are</li>
          <li>The Crew</li>
          <li>The Proof</li>
        </ul>
        <div>
          <button>BOOK YOUR CUT</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
