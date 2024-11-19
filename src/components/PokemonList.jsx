import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonList = ({ onSelectPokemon }) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para el loader

  useEffect(() => {
    setLoading(true); // Activar el loader al iniciar la petición
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then(response => {
        setPokemons(response.data.results);
        setLoading(false); // Desactivar el loader al recibir los datos
      })
      .catch(error => {
        console.error('Error fetching pokemons:', error);
        setLoading(false); // Desactivar el loader en caso de error
      });
  }, []);

  return (
    <div className="w-full md:w-1/3 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Pokemon List</h2>
      {loading ? ( // Mostrar el loader mientras se cargan los datos
        <div className="text-center">
          <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            {/* ... */}
          </svg>
          Loading...
        </div>
      ) : ( // Mostrar la lista cuando los datos estén disponibles
        <ul className="space-y-2" id='pokemon-list'>
          {pokemons.map((pokemon, index) => (
            <li
              id={`pokemon-item-${index}`} // Agregar id único a cada elemento
              key={index}
              onClick={() => onSelectPokemon(pokemon.url)}
              className="cursor-pointer p-2 bg-blue-100 rounded-md text-blue-800 hover:bg-blue-200 transition"
            >
              {pokemon.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PokemonList;