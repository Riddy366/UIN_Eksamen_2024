import React, { useEffect, useState } from 'react';
import { fetchTeams } from '../../sanity/services/teamServices';

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const getTeams = async () => {
      const data = await fetchTeams();
      setTeams(data);
    };

    getTeams();
  }, []);

  return (
    <div>
      <h1>Teams</h1>
      {teams.map((team) => (
        <div key={team._id}>
          <h2>{team.teamName}</h2>
          <p>Slug: {team.slug.current}</p>
          <ul>
            {team.pokemons.map((pokemon, index) => (
              <li key={index}>{pokemon}</li>
            ))}
          </ul>
          {team.image && (
            <img src={team.image.asset.url} alt={team.teamName} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Teams;
