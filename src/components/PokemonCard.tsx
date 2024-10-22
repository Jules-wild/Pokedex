function PokemonCard() {
	const pokemon = pokemonList[1];

	return (
		<figure>
			{pokemon.imgSrc ? (
				<img src={pokemon.imgSrc} alt="rondoudou" />
			) : (
				<p>???</p>
			)}

			<figcaption>{pokemon.name}</figcaption>
		</figure>
	);
}
export default PokemonCard;

const pokemonList = [
	{
		name: "rondoudou",
		imgSrc: "800px-Rondoudou-RFVF.png",
	},
	{
		name: "mew",
	},
];
