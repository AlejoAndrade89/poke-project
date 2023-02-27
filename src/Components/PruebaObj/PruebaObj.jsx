import React from "react";
import styles1 from "./PruebaObj.module.css";
export const PruebaObj = () => {
  let array = {
    water: [{}],
    fire: [{}],
    air: [{}],
    electric: [{}],
  };

  let objeto = Object.keys(array);
  console.log(objeto);

  return (
    <div>
      <h2 className={styles1.water}>{objeto[0]}</h2>
      <h2 className={styles1.fire}>{objeto[1]}</h2>
      <h2 className={styles1.air}>{objeto[2]}</h2>
      <h2 className={styles1.electric}>{objeto[3]}</h2>
    </div>
  );
};
