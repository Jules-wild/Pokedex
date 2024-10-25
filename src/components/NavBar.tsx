interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	backClick: (index: number) => void;
	nextClick: (index: number) => void;
	pokemonList: Pokemon[];
	pokemonIndex: number;
	setpokemonIndex: (index: number) => void;
}

function NavBar({
	pokemonIndex,
	setpokemonIndex,
	pokemonList,
	backClick,
	nextClick,
}: NavBarProps) {
	return (
		<div>
			{pokemonIndex > 0 && ( <button onClick={backClick}>Précédent</button> )}
			{pokemonIndex < pokemonList.length - 1 && (
				<button onClick={nextClick}>Suivant</button>
			)}
		</div>
	);
}

export default NavBar;
