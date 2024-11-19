import { useState } from 'react'
import PokemonList from './components/PokemonList'
import PokemonDetail from './components/Pokemontdetails'

function App() {
  const [selectedPokemonUrl, setSelectedPokemonUrl] = useState(null);
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Pokémon Viewer</h1>
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        <PokemonList onSelectPokemon={setSelectedPokemonUrl} />
        <PokemonDetail pokemonUrl={selectedPokemonUrl} />
      </div>
    </div>
  )
}

export default App
