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
}: NavBarProps) 

const NavBar = ({ pokemonList,setpokemonIndex }) => {
    return (
      <nav>
        {pokemonList.map((pokemon, index) => (
          <button type="button" key={pokemon.name} onClick={()=> setpokemonIndex(index)}>
            {pokemon.name}
          </button>
        ))}
      </nav>
    );
  };

export default NavBar;
