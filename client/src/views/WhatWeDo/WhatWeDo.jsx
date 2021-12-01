import ServiceCard from "../../components/ServiceCards/ServiceCard";
import "./WhatWeDo.css";

const WhatWeDo = () => {
  
  return (
    <section id='whatWeDo' className="what-we-do-page">
      <div className="what-we-do-title">
        <h1>What We Do</h1>
      </div>
      <div className='what-we-do-card-container'>
        <ServiceCard />
      </div>
    </section>
  );
};

export default WhatWeDo;
