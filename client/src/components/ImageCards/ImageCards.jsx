import photoOne from "../../asset/images/WhatWeDo/photo1.jpg";
import photoTwo from "../../asset/images/WhatWeDo/photo2.png";
import photoThree from "../../asset/images/WhatWeDo/photo3.png";
import "./ImageCards.css";

const ImageCards = () => {
  const data = [
    {
      photo: photoOne,
      comment: "Mens, Women's, Children Cuts",
    },
    {
      photo: photoTwo,
      comment: "Beard Sculpting",
    },
    {
      photo: photoThree,
      comment: "Braiding and Styling",
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
          </div>
        </div>
      ))}
    </>
  );
};

export default ImageCards;
