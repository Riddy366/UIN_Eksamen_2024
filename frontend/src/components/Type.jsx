import React from 'react';
import '../style/Type.css';
import Header from './Header';



const Type = () => {
    const pokemons = [
        "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate",
        "Spearow", "Fearow", "Jigglypuff", "Wigglytuff", "Meowth",
        "Persian", "Farfetch'd", "Doduo", "Dodrio", "Lickitung",
        "Chansey", "Kangaskhan", "Tauros", "Ditto", "Eevee"
    ];

    console.log("Pokemons array:", pokemons);

    return (
        <div className="container">
            <Header />
            <div className="content">
                <h1 className="title">Normal</h1>
                <div className="pokemonList">
                    {pokemons.map(pokemon => {
                        console.log("Mapping pokemon:", pokemon);
                        return (
                            <div key={pokemon} className="pokemon">
                                {pokemon}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Type;
