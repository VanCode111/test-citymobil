import React, { useState } from "react";
import { Filter, Output, TableCars } from "../components";
import axios from "axios";

function Table() {
  const [cars, setCars] = useState([]);
  const [tariffs, setTariffs] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [selectedCar, setSelectedCar] = useState("");
  const applyFilter = (filterValue) => {
    setFilterValue(filterValue);
  };
  const chooseCar = (car, year) => {
    const selectedCar = `Выбран автомобиль ${car.mark} ${car.model} ${year} года выпуска`;
    setSelectedCar(selectedCar);
  };
  React.useEffect(() => {
    axios.get("https://city-mobil.ru/api/cars").then(({ data }) => {
      setCars(data.cars);
      setTariffs(data.tariffs_list);
    });
  }, []);

  return (
    <div className="table">
      <Filter applyFilter={applyFilter} />
      <TableCars
        tariffs={tariffs}
        cars={cars}
        filterValue={filterValue}
        chooseCar={chooseCar}
      />
      <Output selectedCar={selectedCar} />
    </div>
  );
}

export default Table;
