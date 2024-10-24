import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
	const pokemonList = [
		{
			name: "bulbasaur",
			imgSrc:
			  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
		  },
		  {
			name: "charmander",
			imgSrc:
			  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
		  },
		  {
			name: "squirtle",
			imgSrc:
			  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
		  },
		  {
			name: "pikachu",
			imgSrc:
			  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
		  },
		  {
			name: "mew",
		  },
		];
	const [pokemonIndex, setpokemonIndex] = useState(0);
	const nextClick = () => {
		if (pokemonIndex < pokemonList.length - 1) {
			setpokemonIndex(pokemonIndex + 1);
		}
	};
	const backtClick = () => {
		if (pokemonIndex > 0) {
			setpokemonIndex(pokemonIndex - 1);
		}
	};
	return (
		<div>
			<PokemonCard pokemon={pokemonList[pokemonIndex]} />
			{pokemonIndex > 0 && <button onClick={backtClick}>Précédent</button>}
			{pokemonIndex < pokemonList.length - 1 && (
				<button onClick={nextClick}>Suivant</button>
			)}
		</div>
	);
}

export default App;
