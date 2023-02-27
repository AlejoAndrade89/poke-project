import React from "react";

export const PokeCard = ({ element }) => {
  return (
    <div key={element.id}>
      <h1>{element.name}</h1>
      <h3>{element.powerLevel}</h3>
      <h3>{element.agressive ? " es agresivo " : " no es agresivo "}</h3>
      <img src={element.avatar} alt="" />
    </div>
  );
};
