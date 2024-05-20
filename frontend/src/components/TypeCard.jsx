import { useEffect, useState } from "react";
import "../styles/Type.css";
import "../styles/Home.css";
import { Link } from "react-router-dom";

// Importere alle type ikonene
import bugIcon from "../assets/types/bug.png";
import darkIcon from "../assets/types/dark.png";
import dragonIcon from "../assets/types/dragon.png";
import electricIcon from "../assets/types/electric.png";
import fairyIcon from "../assets/types/fairy.png";
import fightingIcon from "../assets/types/fighting.png";
import fireIcon from "../assets/types/fire.png";
import flyingIcon from "../assets/types/flying.png";
import ghostIcon from "../assets/types/ghost.png";
import grassIcon from "../assets/types/grass.png";
import groundIcon from "../assets/types/ground.png";
import iceIcon from "../assets/types/ice.png";
import normalIcon from "../assets/types/normal.png";
import poisonIcon from "../assets/types/poison.png";
import psychicIcon from "../assets/types/psychic.png";
import rockIcon from "../assets/types/rock.png";
import steelIcon from "../assets/types/steel.png";
import waterIcon from "../assets/types/water.png";

// Mapper navn til ikonet
const typeIcons = {
  bug: bugIcon,
  dark: darkIcon,
  dragon: dragonIcon,
  electric: electricIcon,
  fairy: fairyIcon,
  fighting: fightingIcon,
  fire: fireIcon,
  flying: flyingIcon,
  ghost: ghostIcon,
  grass: grassIcon,
  ground: groundIcon,
  ice: iceIcon,
  normal: normalIcon,
  poison: poisonIcon,
  psychic: psychicIcon,
  rock: rockIcon,
  steel: steelIcon,
  water: waterIcon,
};

export default function TypeCard() {
  const API_URL = 'https://pokeapi.co/api/v2/';

  const [type, setType] = useState([]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getType = async () => {
    try {
      const response = await fetch(`${API_URL}type/`);
      const data = await response.json();
      setType(data.results);
    } catch (error) {
      console.error("Error fetching type", error);
    }
  };

  useEffect(() => {
    getType();
  }, []);

  return (
    <>
      <section className="Types">
        {type?.slice(0, 18).map((type, index) => (
          <Link key={index} to={`/${type.name}`} className={`type-card ${type.name}`}>
            <div className="type-content">
              <img src={typeIcons[type.name]} alt={`${type.name} icon`} className="type-icon" />
              <h3>{capitalizeFirstLetter(type.name)}</h3>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
