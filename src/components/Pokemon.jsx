function Pokemon( {pokemon} ) {
    return (
        <>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
            <p>Typ:{" "} 
                
                {pokemon.types.map((type) => type.type.name).join("-")}

            </p>

            <p>
                Vikt:{" "}
                {pokemon.weight}
            </p>

            <p>
                Längd:{" "}
                {pokemon.height}
            </p>
        </>
    )
}

export default Pokemon