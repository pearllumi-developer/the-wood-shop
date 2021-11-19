import photoOne from "../../asset/images/WhatWeDo/photo1.jpg";
import photoTwo from "../../asset/images/WhatWeDo/photo2.png";
import photoThree from "../../asset/images/WhatWeDo/photo3.png";
import "./ImageCards.css";

const ImageCards = () => {
  const data = [
    {
      photo: photoOne,
      comment: "Mens, Women's, Children Cuts",
      hiddenText: "Experience wide a range of haircut styles with one of our team members",
      price: 0,
      button:"Book Your Cut"
    },
    {
      photo: photoTwo,
      comment: "Beard Sculpting",
      hiddenText:'Luxury beard sculpting with razor finish',
      price:0,
      button:"Book a Sculpting"
    },
    {
      photo: photoThree,
      comment: "Braiding and Styling",
      hiddenText:"",
      price:0,
      button:"Book Appointment" 
    },
  ];
  console.log(data);
  return (
    <>
      {data.map((item, idx) => (
        <div key={idx} className="card-image">
          <img src={item.photo} alt={item.comment} />
          <div className='card-text'>
            <p>{item.comment}</p>
            <button className='card-btn'>{item.button}</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ImageCards;
