import React, { useState } from "react";
import axios from "axios";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  const handleChange = (event) => {
    setPokemonName(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        setPokemonData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className=" mb-20 flex w-full h-20 bg-yellow-400 justify-center text-white text-6xl">Pokedex</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a Pokemon Name:
          <br/>
          <input class type="text" onChange={handleChange} />
        </label>
        <br/>
        <button className="bg-yellow-400 text-white rounded-md px-3 py-1 mt-2 mb-3 " type="submit">Submit</button>
        <br/>
      </form>
      {pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          <img
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
          />
          <p>Height: {pokemonData.height}</p>
          <p>Weight: {pokemonData.weight}</p>
          <h3>Abilities:</h3>
          <ul>
            {pokemonData.abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
