import { useEffect, useState } from "react";
import Slide from "react-slick";
import nextArrow from "../../asset/images/logos/nextarrow.png";
import prevArrow from "../../asset/images/logos/prevarrow.png";

import proof1 from '../../asset/images/carousel/proof1.png'
import proof2 from '../../asset/images/carousel/proof2.png'
import proof3 from '../../asset/images/carousel/proof3.png'
import proof4 from '../../asset/images/carousel/proof4.jpg'
import proof5 from '../../asset/images/carousel/proof5.jpg'
import "./ImageCarousel.css";

const pictures = [
  {
    photo: proof2,
    alt: "Display a men fade cut",
  },
  {
    photo: proof3,
    alt: "Barber using razor for line ups",
  },
  {
    photo: proof5,
    alt: "Barber doing women haircut",
  },
  {
    photo: proof4,
    alt: "Barber giving a kid's cuts",
  },
  {
    photo: proof1,
    alt: "Barber doing clipper work",
  },
];

const ImageCarousel = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [screen, setScreen] = useState(false);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <img src={nextArrow} alt="click for next" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <img src={prevArrow} alt="on click to go back to last previous" />
      </div>
    );
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setScreen(true);
      } else {
        setScreen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    dotClass: "slick-dots",
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setImageIndex(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  if (screen) {
    settings.slidesToShow = 1;
  };
  

  return (
    <div className="carousel-container">
      <Slide {...settings}>
        {pictures.map((picture, idx) => (
          <div key={idx} className={idx === imageIndex ? "slide active-slide" : "slide"}>
            <img src={picture.photo} alt={picture.alt} />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ImageCarousel;
