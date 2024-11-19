// src/components/PokemonDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonDetail = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (pokemonUrl) {
      axios.get(pokemonUrl)
        .then(response => setPokemon(response.data))
        .catch(error => console.error('Error fetching pokemon details:', error));
    }
  }, [pokemonUrl]);

  if (!pokemon) return <div className="w-full md:w-2/3 bg-white p-4 rounded-lg shadow-md text-gray-500">Select a Pokémon to see details</div>;

  return (
    <div className="w-full md:w-2/3 bg-white p-4 rounded-lg shadow-md">
      <h2 id="h2" className="text-3xl font-semibold text-gray-800 mb-4">{pokemon.name}</h2>
      <img id="img" className="w-auto mx-auto mb-4" src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p className="text-lg font-medium text-gray-700">Height: {pokemon.height}</p>
      <p className="text-lg font-medium text-gray-700">Weight: {pokemon.weight}</p>
      <p className="text-lg font-semibold text-gray-700 mt-4">Abilities:</p>
      <ul className="list-disc list-inside">
        {pokemon.abilities.map((ability, index) => (
          <li key={index} className="text-gray-700">{ability.ability.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetail;
