import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

import Match from './Match';

import { fetchGuildMatches, fetchPlayers } from '../services/api';

export default function matchesContainer({ guildID }) {

  const [matches, setMatches] = useState([]);
  const [players, setPlayers] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);

      try {
        var guildMatches = fetchGuildMatches(guildID);
        var playerResponse = fetchPlayers();

        setMatches(await guildMatches);
        setPlayers(await playerResponse);

      } catch (error) {
        setError("Failed to load match data.");
        console.error("Matches Container Call API Error", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <>
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="animate-spin text-chinney-purple mb-4" size={48} />
          <p className="text-slate-400">Loading Match Data...</p>
        </div>
      )}
      
      {error && (
        <div className="bg-red-900/20 border border-red-800 text-red-300 p-6 rounded-lg text-center my-8">
          <p className="font-bold text-lg mb-2">Oops! Error Loading Data</p>
          <p>{error}</p>
        </div>
      )}

      {!isLoading && !error && (
        <div className='flex flex-col justify-center'>
          {matches.map((match) => {
            return(<Match key={match.matchID} match={match} players={players}/>);
          })}

        </div>
      )}
    
    </>
  );
}