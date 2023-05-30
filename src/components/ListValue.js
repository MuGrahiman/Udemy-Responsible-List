import React from "react";
import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ datas: { data, searchTerm } }) => 
      data
      .filter((data) =>
        data.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, data) => acc + data.cost, 0)
  );
  return <div className="car-value">Total Cost:${totalCost}</div>;
}

export default CarValue;
