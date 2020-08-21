import React, { useState, FormEvent, ChangeEvent } from "react";
import EmpleadoPorHora from "./EmpleadoPorHora";
import EmpleadoFijo from "./EmpleadoFijo";
import EmpleadoTemporal from "./EmpleadoTemporal";
import Pages from "../../pages/pagination/pagination";
import Documentation from "../../pages/documentation";

const Employees = () => {

  const [employee, setEmployee] = useState('');

  let wilmer = new EmpleadoFijo("Wilmer", 5000);

  const employeesTypes = {
    empleadofijo: "Empleado Fijo",
    empleadohora: "Empleado por Hora",
    empleadotemporal: "Empleado Temporal"
  }

  const { empleadofijo, empleadohora, empleadotemporal } = employeesTypes;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      setEmployee(e.target.value)
  }

  function htmlContainer(obj: string) {
    let html = "";
    html = `<p>${obj}</p>`;
    const element = document.getElementById("response");
    if (element !== null) {
      element.innerHTML = html;
    }
  }

  const handleClick = (e: FormEvent) => {
    e.preventDefault();

    switch (employee) {
      case "Empleado Fijo":
        wilmer = new EmpleadoFijo("Wilmer", 5000);
        htmlContainer(wilmer.about());
        break;
      case "Empleado por Hora":
        wilmer = new EmpleadoPorHora("Wilmer", 40);
        htmlContainer(wilmer.about());
        break;
      case "Empleado Temporal":
        wilmer = new EmpleadoTemporal("Wilmer", 7000);
        htmlContainer(wilmer.about());
        break;
    }
  };

  return (
    <>
      <Pages 
        link="oop"
        name="OOP"
      />
      <Documentation 
        title=""
        text=""
      />
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm-12 col-lg-6">
            <div className="input-group mb-3">
              <select 
                  className="custom-select"
                  onChange={handleChange}
              >
                <option defaultValue="0">Choose...</option>
                <option value={empleadofijo}>Permanent</option>
                <option value={empleadohora}>Contractors</option>
                <option value={empleadotemporal}>Temporal</option>
              </select>
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={handleClick}
                >
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-6">
            <div id="response"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employees;
