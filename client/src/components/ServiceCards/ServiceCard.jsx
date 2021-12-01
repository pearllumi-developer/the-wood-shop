import "./ServiceCards.css"



const services = [
  {
    name: 'HAIRCUTS',
    price: 30,
    time: 30
  },
  {
    name: "WOMEN'S HAIRCUTS",
    price: 25,
    time: 30
  },
  {
    name: "KID'S HAIRCUTS",
    price: 20,
    time: 30
  },
  {
    name: 'HAIRCUT N SHAVE',
    price: 40,
    time: 30
  },
  {
    name: 'EDGE',
    price: 15,
    time: 15
  },
  {
    name: "KID'S DESIGN",
    price: 10,
    time: 15
  }
];

const ServiceCard = () => {
  return (
    <>
    {services.map((service, idx) => (
      <div key={`${service.name}.${idx}`}className='service-card-container'>
        <h3>{service.name}</h3>
        <span>${service.price} - {service.time}mins</span>
      </div>
    ))}
    </>
  );
};

export default ServiceCard;