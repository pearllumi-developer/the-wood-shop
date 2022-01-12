import home from "../../asset/images/logos/home.png";
import clock from "../../asset/images/logos/clock.png";
import phone from "../../asset/images/logos/phone.png";
import "./IconCards.css";

const IconCards = () => {
  const vectors = [
    {
      icon: phone,
      phone: (
        <a className="icon-phone" href="tel:8507392209" id="icon-phone">
          (850) 739-2209
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
        <p>
          <strong>Governor's Square Mall</strong> <br />
          1500 Apalachee Pkwy, <br />
          Tallahassee, FL 32301 <br /> Next to JCPenney
        </p>
      ),
      comment: "The Wood Shops location in the Tallahassee Mall",
    },
  ];

  return (
    <>
      {vectors.map((item, idx) => (
        <div key={idx} className="icon-card">
          <div
            className="img-container"
            style={{
              backgroundImage: `url(${item.icon})`,
              backgroundSize: "50%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          {item.phone && (
            <div className="icon-word-box">
              {item.phone}
            </div>
          )}
          {item.time && (
            <div className="icon-word-box">
              <>{item.time[0]}</> <>{item.time[1]}</> <>{item.time[2]}</>
            </div>
          )}
          {item.address && (
            <div id="home-address" className="icon-word-box">
              <a
                className="icon-address"
                href="https://maps.apple.com/maps?q=1500apalachee+pkwy+tallahassee+fl+32301"
              >
                {item.address}
              </a>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default IconCards;
