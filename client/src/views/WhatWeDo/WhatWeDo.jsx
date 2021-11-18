import ImageCards from "../../components/ImageCards/ImageCards";
import "./WhatWeDo.css";

const WhatWeDo = () => {
  
  return (
    <section className="what-we-do-page">
      <div className="what-we-do-title">
        <h1>What We Do</h1>
      </div>
      <div className='what-we-do-card-container'>
        <ImageCards />
      </div>
    </section>
  );
};

export default WhatWeDo;
