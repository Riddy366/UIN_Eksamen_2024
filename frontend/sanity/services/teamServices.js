import {client} from "../services/client"

// Definer GROQ-spørringen for å hente teamdata
const fetchTeamsQuery = `
  *[_type == "teams"]{
    _id,
    teamName,
    slug,
    pokemons,
    image{
      asset->{
        _id,
        url
      }
    }
  }
`;

// Funksjon for å hente teamdata fra Sanity
export const fetchTeams = async () => {
  try {
    const teams = await client.fetch(fetchTeamsQuery);
    return teams;
  } catch (error) {
    console.error("Failed to fetch teams:", error);
    return [];
  }
};
