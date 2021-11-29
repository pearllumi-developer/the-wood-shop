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
      hiddenText:"Offering a range of braiding techniques from crochet, box braids, twists, and sew-ins.",
      price:0,
      button:"Book Appointment" 
    },
  ];
  console.log(data);
  return (
    <>
      {data.map((item, idx) => (
        <div key={idx} className="card-image" style={{backgroundImage: `url(${item.photo})`,backgroundSize: "cover", backgroundPosition: "center"}}>
          <div className='hidden-text'>
            <p>{item.hiddenText}</p> <p>Starting Price: ${item.price}</p>
            <button className='card-btn'>{item.button}</button>
          </div>
          <div className='card-text'>
            <p>{item.comment}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ImageCards;
