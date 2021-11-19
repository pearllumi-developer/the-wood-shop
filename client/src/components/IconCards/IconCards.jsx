import home from "../../asset/images/logos/home.png";
import clock from "../../asset/images/logos/clock.png";
import phone from "../../asset/images/logos/phone.png";
import "./IconCards.css";

const IconCards = () => {
  const vectors = [
    {
      icon: phone,
      phone: "555-555-5555",
      comment: "The Wood Shop's business number"
    },
    {
      icon: clock,
      time: ["Mon - Thurs: 9am - 8pm", "Fri: 9am - 8pm", "Sun: 10am - 6pm"],
      comment:'The Wood Shop hours of operations',
    },
    {
      icon: home,
      address:
        "Inside The Tallahassee Mall Next to Auntie Anne's 12345 Tallahassee Lane",
      comment: 'The Wood Shops location in the Tallahassee Mall'
    },
  ];

  return (
    <>
      {vectors.map((item, idx) => (
        <div key={idx} className='icon-card'>
          <div className='img-container'>
          <img src={item.icon} alt={item.comment} />
          </div>

          {item.phone &&<div className='icon-word-box'><p id='icon-phone'>{item.phone}</p></div>}
          {item.time &&<div className='icon-word-box'><p>{item.time[0]}</p> <p>{item.time[1]}</p> <p>{item.time[2]}</p></div>}
          {item.address &&<div className='icon-word-box'><p>{item.address}</p></div>}
        </div>
      ))}
    </>
  );
};

export default IconCards;
