import CrewCards from '../../components/CrewCards/CrewCards';
import './TheCrew.css'
const TheCrew = () => {
  return (
    <section id='theCrew' className='crew-page'>
      <h1 className='crew-title' >The Crew</h1>
      <div className='the-crew-card-holder'>
      <CrewCards />
      </div>
    </section>
  );
};

export default TheCrew;