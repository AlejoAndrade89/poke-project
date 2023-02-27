import React from "react";
import pokemonJson from "../../../pokemons.json";
import { PokeCard } from "../Pokecard/PokeCard";

export const Pokemons = ({ type }) => {
  let pokemonsByType = pokemonJson[type];

  return (
    <div>
      {pokemonsByType.map((element) => {
        return <PokeCard element={element} key={element.id} />;
      })}
    </div>
  );
};
