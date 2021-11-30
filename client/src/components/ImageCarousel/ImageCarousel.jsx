import { useEffect, useState } from "react";
import Slide from "react-slick";
import temp from "../../asset/images/carousel/temp.png";
import fade from "../../asset/images/carousel/fade.png";
import mirror from "../../asset/images/carousel/mirror.png";
import shave from "../../asset/images/carousel/shave.png";
import nextArrow from "../../asset/images/logos/nextarrow.png";
import prevArrow from "../../asset/images/logos/prevarrow.png";
import "./ImageCarousel.css";

const pictures = [
  {
    photo: fade,
    alt: "Display a men fade cut",
  },
  {
    photo: mirror,
    alt: "Barber reflection in the mirror",
  },
  {
    photo: shave,
    alt: "Barber applying saving cream on a clients neck",
  },
  {
    photo: temp,
    alt: "Barber giving a temp to a client",
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
