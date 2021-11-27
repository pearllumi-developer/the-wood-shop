import Taylor from "../../asset/images/crew-images/Taylor.png";
import Johnson from "../../asset/images/crew-images/Johnson.png";
import Suarez from "../../asset/images/crew-images/Suarez.png";
import instagram from "../../asset/images/logos/instagram.png";
import "./CrewCards.css";

const CrewCards = () => {
  const crews = [
    {
      photo: Suarez,
      name: 'Andre "Fifty" B.',
      link: null,
      alt: "Andre B.'s instagram account"
    },
    {
      photo: Taylor,
      name: "Kevin K.",
      link: null,
      alt: "Kevin K.'s instagram account"
    },
    {
      photo: Johnson,
      name: "Ali C.",
      link: null,
      alt: "Ali C.'s instagram account"
    },
    {
      photo: Suarez,
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
        <img src={instagram} alt={crew.alt} />

      </div>
    </div>
  ))}
  </>
  );
};

export default CrewCards;
