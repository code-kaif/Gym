import { Check } from "lucide-react";
import { Link } from "react-router-dom"

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "3 Months",
      price: 4500,
      length: 3,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "6 Months",
      price: 9000,
      length: 6,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "1 Year",
      price: 18000,
      length: 12,
    },
  ];
  return (
    <section className="pricing">
      <h1>Persona Gym Plans</h1>
      <div className="wrapper">
        {pricing.map((el) => {
          return (
            <div className="card" key={el.title}>
              <img src={el.imgUrl} alt={el.title} />
              <div className="title">
                <h1>{el.title}</h1>
                <h1>Package</h1>
                <h2>Rs {el.price}</h2>
              </div>
              <div className="description">
                <p>
                  <Check /> Eqiupments
                </p>
                <p>
                  <Check /> Anytime Traning
                </p>
                <p>
                  <Check /> Free Restroom
                </p>
                <p>
                  <Check /> 24/7 Skilled Support 
                </p>
                <Link to={"/"}>Join Now</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
