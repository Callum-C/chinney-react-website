import {useState, useEffect, useMemo} from 'react';
import { Loader2 } from 'lucide-react';
import { fetchGuildData } from '../services/api';
import Leaderboard from './Leaderboard';
import SearchBar from './SearchBar';

export default function leaderboardContainer({guildID}) {

  const [stats, setStats] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const season = 4;
  var placedStats, unplacedStats;

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {

        const data = await fetchGuildData(guildID);
        setStats(data);

      } catch (error) {
        setError("Failed to load leaderboard data.");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const processedData = useMemo(() => {
    if (!isLoading){
      let data = [...stats[season]];

      if (searchQuery) {
        data = data.filter(
          p => p.username.toLowerCase().includes(searchQuery.toLowerCase())
        )
      }

      return data;
    } else {
      return [];
    }
    
  }, [stats, searchQuery]);

  if (!isLoading && !error) {
    placedStats = processedData.filter(player => player.placed);
    unplacedStats = processedData.filter(player => !player.placed);
  }

  return (
    <>
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 className="animate-spin text-chinney-purple mb-4" size={48} />
          <p className="text-slate-400">Loading Season Data...</p>
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
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>

          <div className='flex flex-col justify-center'>
            <Leaderboard stats={placedStats} isPlaced={true}/>
            <Leaderboard stats={unplacedStats} isPlaced={false}/>
          </div>
        </div>
        
      )}
    </>
  );
}