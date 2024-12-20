interface Pokemon{
	name: string;
	imgSrc: string;
}

  function PokemonCard({ pokemon }: PokemonCardProps) {
	return (
	  <figure>
		{pokemon.imgSrc ? (
		  <img src={pokemon.imgSrc} alt={pokemon.name} />
		) : (
		  <p>???</p>
		)}
  
		<figcaption>{pokemon.name}</figcaption>
	  </figure>
	);
  }
// function PokemonCard({pokemon}) {
	
// 	return (
// 		<figure>
// 			{pokemon.imgSrc ? (
// 				<img src={pokemon.imgSrc} alt={pokemon.name} />
// 			) : (
// 				<p>???</p>
// 			)}

// 			<figcaption>{pokemon.name}</figcaption>
// 		</figure>
		
// 	);
// }

export default PokemonCard;
