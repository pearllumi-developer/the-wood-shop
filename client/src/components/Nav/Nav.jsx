import logo from '../../asset/images/logos/woodshoplogo.png'
const Nav = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="The Wood Shop Barber Shop's Logo" />
      </div>
      <ul>
        <li>Our Roots</li>
        <li>What We Do</li>
        <li>Where We Are</li>
        <li>The Crew</li>
        <li>The Proof</li>
      </ul>
      <div>
        <button>Book Your Cut</button>
      </div>
    </nav>
  );
};

export default Nav;