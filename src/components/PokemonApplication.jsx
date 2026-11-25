import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

function PokemonApplication() {
    const [pokemonList,setPokemonList] = useState([]);  
    const [pickedPokemon,setPickedPokemon] = useState("");
    const [pokemonData,setPokemonData] = useState(null)
    
    useEffect(()=> {
        const getPokemonList = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const data = await res.json();
        console.log(data);
        
        setPokemonList(data.results)
        }

        getPokemonList();
    },[])

    const getPokemonData = async() => {
        const res = await fetch(pickedPokemon);
        const pokemonData = await res.json();
        setPokemonData(pokemonData);
    }
    
    useEffect(() => {
        console.log(pickedPokemon)
    },[pickedPokemon])

    return (
        <>
            <select value={pickedPokemon}
             onChange={(e) => setPickedPokemon(e.target.value)}>

                <option value="">Välj en pokemon</option>
                {pokemonList.map((pokemon) => (
                    <option key={pokemon.name}
                value={pokemon.url}>{pokemon.name}</option>
                ))}
            
            </select>
            
            <button onClick={getPokemonData}>Hämta info om Pokemon</button>
            {pokemonData && <Pokemon pokemon={pokemonData} />}
        </>
    )

}   

export default PokemonApplication