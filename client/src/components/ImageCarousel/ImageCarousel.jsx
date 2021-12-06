import { useEffect, useState } from "react";
import Slide from "react-slick";
import nextArrow from "../../asset/images/logos/nextarrow.png";
import prevArrow from "../../asset/images/logos/prevarrow.png";

import proof1 from '../../asset/images/carousel/GalleryPic1.png'
import proof2 from '../../asset/images/carousel/GalleryPic2.png'
import proof3 from '../../asset/images/carousel/GalleryPic3.png'
import proof4 from '../../asset/images/carousel/GalleryPic4.png'
import proof5 from '../../asset/images/carousel/GalleryPic5.png'
import proof6 from '../../asset/images/carousel/GalleryPic6.png'
import proof7 from '../../asset/images/carousel/GalleryPic7.png'
import "./ImageCarousel.css";

const pictures = [
  {
    photo: proof1,
    alt: "Barber doing a edging",
  },
  {
    photo: proof2,
    alt: "Barber fading the back of the head",
  },
  {
    photo: proof3,
    alt: "Women waiting for her hair cut",
  },
  {
    photo: proof4,
    alt: "Barber lining up a beard with a razor",
  },
  {
    photo: proof5,
    alt: "Barber doing clipper work",
  },
  {
    photo: proof6,
    alt: "Barber shampooing men's hair",
  },
  {
    photo: proof7,
    alt: "Barber cutting gentleman hair",
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
