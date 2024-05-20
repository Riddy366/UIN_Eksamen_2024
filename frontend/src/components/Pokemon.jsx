import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Pokemon.css";

export default function Pokemon() {
  let { pokemonName } = useParams()
  let [pokemonData, setPokemonData] = useState(null)
  const [abilityDetails, setAbilityDetails] = useState({})

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  //https://codedamn.com/news/javascript/how-to-capitalize-first-letter-in-javascript

  const fetchPokemonData = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      const data = await response.json()
      setPokemonData(data)
    } catch (error) {
      console.error('Error fetching Pokemon data:', error)
    }
  }

  //Fikk hjelp av Stine Vågnes (venn) med å få tak i beskrivelse til effektene
  const fetchAbility = async (abilityName) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/ability/${abilityName}`)
      const data = await response.json()
      return data
    } catch (error) {
      console.error("Error fetching ability details:", error)
      return null
    }
  }

  const fetchAbilities = async (abilityName) => {
    try {
      const abilityDetails = await fetchAbility(abilityName)
      return abilityDetails ? abilityDetails : null
    } catch (error) {
      console.error("Error fetching abilities:", error)
      return null
    }
  }

  useEffect(() => {
    fetchPokemonData()
  }, [pokemonName])

  useEffect(() => {
    if (pokemonData) {
      const fetchAbilitiesDetails = async () => {
        const abilitiesData = await Promise.all(
          pokemonData.abilities.map((ability) => fetchAbilities(ability.ability.name))
        )
        const abilitiesDetails = {}
        abilitiesData.forEach((abilityData, index) => {
          abilitiesDetails[pokemonData.abilities[index].ability.name] = abilityData
        })
        setAbilityDetails(abilitiesDetails)
      }
      fetchAbilitiesDetails()
    }
  }, [pokemonData])

  if (!pokemonData) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className="container">
            <section className="mainInfo">
            <h2>{pokemonData.name.toUpperCase()}</h2>
            <img className="pokemonIMG" src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name} />
            </section>
        <aside className="stats">
          <h2>{`TYPE(S)`}</h2>
          <ul className="types">
            {pokemonData.types.map((type, index) => (
              <li key={index}>{capitalizeFirstLetter(type.type.name)}</li>
            ))}
          </ul>
          <h2>STATS</h2>
          <ul className="stats">
            {pokemonData.stats.map((stat, index) => (
              <li key={index} className="stat">
                <span className="statName">{stat.stat.name}</span>
                <span className="statValue">{stat.base_stat}</span>
                </li>
                ))}
          </ul>
        </aside>
        <article className="abilities">
          <h2>ABILITIES</h2>
          <ul className="Abilities">
            {pokemonData.abilities.map((ability, index) => (
              <li key={index}>
                {capitalizeFirstLetter(ability.ability.name)}
                {abilityDetails[ability.ability.name] && (
                    <ul className="effects">
                        <li>Effect: {abilityDetails[ability.ability.name].effect_entries[0].effect}</li>
                        <li>Short Effect: {abilityDetails[ability.ability.name].effect_entries[0].short_effect}</li>
                    </ul>
                    )}
              </li>
            ))}
            </ul>
            </article>
      </div>
    </>
  )
}
