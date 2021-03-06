import React, { useEffect, useState } from "react";
import Service from "../../Services/Service";
import { useNavigate } from "react-router-dom";
const SmService = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.slice(0, 3));
      });
  }, []);

  console.log(services);
  return (
    <section className=" px-2 md:px-[60px] lg:px-[100px] my-16  ">
      <h2 className="text-2xl lg:text-5xl text-[#8046B7] font-bold font-mono text-left my-8">
        My All Services
      </h2>
      <div className="service grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6 ">
        {services.map((service) => (
          <Service key={service.id} data={service} />
        ))}
      </div>
      <button
        onClick={() => navigate("/services")}
        className="my-6 text-center py-2 border rounded-md px-8 text-[#8046B7] font-semibold"
      >
        View More
      </button>
    </section>
  );
};

export default SmService;
