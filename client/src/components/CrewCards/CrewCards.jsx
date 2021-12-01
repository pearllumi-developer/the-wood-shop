import DefaultImage from '../../asset/images/crew-images/default-image.png'
// import instagram from "../../asset/images/logos/instagram.png";
import Fifty from '../../asset/images/crew-images/Fifty.png';
import Dante from '../../asset/images/crew-images/Dante.png';
import Kelvin from '../../asset/images/crew-images/Kelvin.png';
import "./CrewCards.css";

const CrewCards = () => {
  const crews = [
    {
      photo: Fifty,  
      name: "Fifty Kutts",
      link: "fifty-kutts",
      button:'BOOK WITH FIFTY',
      alt: "Andre B.'s instagram account"
    },
    {
      photo: Kelvin,
      name: "Kevin K.",
      link: "kelvin-kimble-1",
      button:'BOOK WITH KEVIN',
      alt: "Kevin K.'s instagram account"
    },
    {
      photo: Dante,
      name: "Dante H.",
      link: "dante-hall",
      button:'BOOK WITH DANTE',
      alt: "Dante H.'s instagram account"
    },
  ];

  return (
  <>
  {crews.map((crew, idx) => (
    <div key={idx} className='crew-card-body' style={{backgroundImage: `url(${crew.photo})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className='crew-name-box'>
        <span>{crew.name}</span>
        {/* <img src={instagram} alt={crew.alt} /> */}
      </div>
        <div className='overlay'>
          <button onClick={() => window.location.href=`https://online.getsquire.com/book/the-wood-shop-tallahassee/professional/${crew.link}`}>{crew.button}</button>
        </div>
    </div>
  ))}
  </>
  );
};

export default CrewCards;
