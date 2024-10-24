import "./App.css";
import PokemonCard from "./components/PokemonCard";


function App() {
	const pokemonList = [
		{
			name: "rondoudou",
			imgSrc: "800px-Rondoudou-RFVF.png",
		},
		{
			name: "mew",
		},
	];
	return (
		<div>
			<PokemonCard pokemon={pokemonList[0]} />
		</div>
	);
}

export default App;
