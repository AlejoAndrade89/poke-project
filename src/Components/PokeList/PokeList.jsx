import React from "react";
import { Pokemons } from "../Pokemons/Pokemons";

export const PokeList = () => {
  let type = "water";

  return (
    <div>
      <Pokemons type={type} />
    </div>
  );
};
