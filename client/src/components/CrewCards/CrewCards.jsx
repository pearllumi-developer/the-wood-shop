import DefaultImage from '../../asset/images/crew-images/default-image.png'
// import instagram from "../../asset/images/logos/instagram.png";
import Fifty from '../../asset/images/crew-images/Fifty.png';
import Dante from '../../asset/images/crew-images/Dante.png';
import "./CrewCards.css";

const CrewCards = () => {
  const crews = [
    {
      photo: Fifty,  
      name: "Fifty Kutts",
      link: null,
      alt: "Andre B.'s instagram account"
    },
    {
      photo: DefaultImage,
      name: "Kevin K.",
      link: null,
      alt: "Kevin K.'s instagram account"
    },
    {
      photo: DefaultImage,
      name: "Ali C.",
      link: null,
      alt: "Ali C.'s instagram account"
    },
    {
      photo: Dante,
      name: "Dante H.",
      link: null,
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
    </div>
  ))}
  </>
  );
};

export default CrewCards;
