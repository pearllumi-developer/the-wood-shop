import logo from "../../asset/images/logos/woodshoplogo.png";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div>
        <a href='#landing'><img src={logo} alt="The Wood Shop Barber Shop's Logo" /></a>
      </div>
      <div className='ul-button-container'>
        <ul>
          <li><a href='#ourRoots'>Our Roots</a></li>
          <li><a href='#whatWeDo'>What We Do</a></li>
          <li><a href='#whereWeAre'>Where We Are</a></li>
          <li><a href='#theCrew'>The Crew</a></li>
          <li><a href='#theProof'>The Proof</a></li>
        </ul>
        <div>
          <button onClick={() => window.location.href="https://online.getsquire.com/book/the-wood-shop-tallahassee/professional"}>BOOK YOUR CUT</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
