import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Pricing() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch("/assets/data/plan.json")
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);

  const featureIcon = (
    <svg
      className="fill-primary"
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
    >
      <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
    </svg>
  );

  return (
    <section
      className="lg:mt-150 mt-100 text-black font-myfont dark:text-white max-w-[1400px] mx-auto px-20 lg:px-40"
    >
      <h2 className="text-center font-semibold lg:text-7xl md:text-6xl text-4xl mb-10">
        My Pricing Plan
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-30 items-center mt-20">
        {plans.map((plan, index) => (
          <article
            key={index}
            className={`bg-lightbox dark:bg-darkbox p-20 lg:p-40 ${
              plan.badge ? "pt-40" : ""
            } rounded-2xl md:rounded-3xl border-2 md:border-3 border-black/5 dark:border-white/5 hover:border-primary/50 overflow-hidden transition-all relative`}
          >
            {plan.badge && (
              <p className="absolute top-0 bg-primary text-white right-0 text-sm lg:text-xl font-bold lg:px-20 px-15 py-5 lg:rounded-bl-2xl rounded-bl-lg">
                {plan.badge}
              </p>
            )}

            <h3 className="font-medium text-3xl">{plan.title}</h3>
            <h4 className="text-primary text-5xl mt-10 mb-20 font-semibold">
              {plan.price}
              <span className="text-xl font-medium ml-3 text-black dark:text-white">
                {plan.priceUnit}
              </span>
            </h4>
            <p className="text-sm">{plan.description}</p>
            <div className="h-2 lg:h-3 bg-white/15 w-full rounded-full my-10"></div>

            {plan.features.map((feature, i) => (
              <p key={i} className="flex mb-10 gap-10 items-center">
                {featureIcon}
                {feature}
              </p>
            ))}

            <Link to='/contact' className={`${plan.badge ? "btn-primary text-black" : "btn-secondary"} mt-30 w-max`}>
              <span></span>
              <span>Get Started</span>
              <span></span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}