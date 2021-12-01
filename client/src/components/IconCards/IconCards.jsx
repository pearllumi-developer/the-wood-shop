import home from "../../asset/images/logos/home.png";
import clock from "../../asset/images/logos/clock.png";
import phone from "../../asset/images/logos/phone.png";
import "./IconCards.css";

const IconCards = () => {
  const vectors = [
    {
      icon: phone,
      phone: (
        <a className="icon-phone" href="tel:8507392209">
          <p>(850) 739-2209</p>
        </a>
      ),
      comment: "The Wood Shop's business number",
    },
    {
      icon: clock,
      time: [
        <p>
          <strong>Mon - Thu</strong> 11am - 7pm
        </p>,
        <p>
          <strong>Fri - Sat</strong> 11am - 8pm
        </p>,
        <p>
          <strong>Sun</strong> 12pm - 6pm
        </p>,
      ],
      comment: "The Wood Shop hours of operations",
    },
    {
      icon: home,
      address: (
        <a
          className="icon-address"
          href="https://maps.apple.com/maps?q=1500apalachee+pkwy+tallahassee+fl+32301"
        >
          <p>
            <strong>Governor's Square Mall</strong> <br />1500 Apalachee Pkwy, <br />
            Tallahassee, FL 32301 <br /> Next to JCPenney
          </p>
        </a>
      ),
      comment: "The Wood Shops location in the Tallahassee Mall",
    },
  ];

  return (
    <>
      {vectors.map((item, idx) => (
        <div key={idx} className="icon-card">
          <div className="img-container">
            <img src={item.icon} alt={item.comment} />
          </div>

          {item.phone && (
            <div className="icon-word-box">
              <p id="icon-phone">{item.phone}</p>
            </div>
          )}
          {item.time && (
            <div className="icon-word-box">
              <p>{item.time[0]}</p> <p>{item.time[1]}</p> <p>{item.time[2]}</p>
            </div>
          )}
          {item.address && (
            <div id='home-address' className="icon-word-box">
              <p>{item.address}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default IconCards;
