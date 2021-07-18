import classNames from "classnames";
import React, { useState } from "react";

function TableCars({ tariffs, cars, filterValue, chooseCar }) {
  const [sortCar, setSortCar] = useState(null);
  const sortedCars =
    sortCar != null
      ? sortCar
        ? cars.sort((a, b) => (a.mark + a.model > b.mark + b.model ? 1 : -1))
        : cars.sort((a, b) => (a.mark + a.model < b.mark + b.model ? 1 : -1))
      : cars;

  const toggleSort = () => {
    setSortCar(null ? true : !sortCar);
  };
  return (
    <table className="table-cars" cellPadding="0" cellSpacing="0">
      <thead>
        <tr>
          <td onClick={toggleSort}>Марка и модель</td>
          {tariffs.map((tariff, index) => {
            return (
              <td key={index} onClick={toggleSort}>
                {tariff}
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {sortedCars.map((car, index) => {
          return (car.mark + car.model)
            .toLowerCase()
            .includes(filterValue.toLowerCase()) ? (
            <tr key={index}>
              <td className="table-cars__car"> {`${car.mark} ${car.model}`}</td>
              {tariffs.map((tariff, index) => {
                return (
                  <td
                    key={index}
                    className={classNames({ disable: !car.tariffs[tariff] })}
                    onClick={() => chooseCar(car, car.tariffs[tariff].year)}
                  >
                    {car.tariffs[tariff] ? car.tariffs[tariff].year : "-"}
                  </td>
                );
              })}
            </tr>
          ) : (
            <tr key={index}></tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableCars;
