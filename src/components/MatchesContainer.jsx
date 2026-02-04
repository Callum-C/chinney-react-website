import { useState, useEffect, useMemo } from 'react';
import { Loader2 } from 'lucide-react';

import Match from './Match';
import SearchBar from './SearchBar';

import { fetchGuildMatches, fetchPlayers } from '../services/api';

export default function MatchesContainer({ guildID }) {

  const [matches, setMatches] = useState([]);
  const [players, setPlayers] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
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

  // Add Player Usernames to match data
  const encrichedMatches = useMemo(() => {
    if (!isLoading) {
      return matches.map(match => ({
        ...match,
        playerUsernames: match.players.map(player => players[player] || 'Unknown')
      }));

    } else {
      return [];
    }
  }, [matches])

  // Filter matches shown in container by user's search query
  const filteredMatches = useMemo(() => {
    if (!isLoading) {

      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return encrichedMatches.filter(match => 
          match.playerUsernames.some(name => name.toLowerCase().includes(query)) ||
          match.matchID.toString().includes(query)
        );
      } else {
        return encrichedMatches;
      }

    } else {
      return [];
    }
  }, [encrichedMatches, searchQuery]);

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
        <div className=''>
          <div className=''>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} defaultText='Search Player Username or Match ID' />
          </div>

          <div className='flex flex-col justify-center'>
            {filteredMatches.map((match) => {
              return(<Match key={match.matchID} match={match} players={players}/>);
            })}

          </div>
        </div>
      )}
    
    </>
  );
}