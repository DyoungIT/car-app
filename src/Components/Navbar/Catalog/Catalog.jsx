import React, { useEffect, useState } from "react";
import style from "./Catalog.module.css";

export function Catalog() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("/cars.json")
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={style.CarContainer}>
      {cars.map((car) => (
        <div key={car.id} className={style.item}>
          <h2>{car.name}</h2>
          <img src={car.image} className={style.carImage}/>
          <p className={style.carInfo}>{car.description}</p>
          <p className={style.priceInfo}>${car.price}</p>
          <button className={style.BuyBtn}>Buy</button>
        </div>
      ))}
    </div>
  );
}
