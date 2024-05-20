import React from 'react';

// brukt https://github.com/PokeAPI/sprites# for å finne ut hvordan bildet skal displayes
export default function PokeCard({ pokemon }) {
    return (
        <article>
            <h1>{pokemon.name.toUpperCase()}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h2>TYPE(S)</h2>
            <p>{pokemon.types.map(type => type.type.name).join(', ')}</p>
            <h2>STATS</h2>
            {pokemon.stats.map(stat => (
                <p key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</p>
            ))}
            <h2>ABILITIES</h2>
            {pokemon.abilities.map((ability, index) => (
                <div key={ability.ability.name}>
                    <h3>ABILITY {index + 1}</h3>
                    <p>{ability.ability.name}</p>
                </div>
            ))}
        </article>
    );
}
