import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <section className="px-2 md:px-[60px] lg:px-[100px] my-16">
      <h2 className="text-2xl lg:text-6xl text-[#8046B7] font-bold font-mono text-center my-8">
        My All Services{" "}
      </h2>
      <div className="service grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6 ">
        {services.map((service) => (
          <Service key={service.id} data={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
