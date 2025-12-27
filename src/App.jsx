import React, {useState, useEffect} from 'react';
import {Loader2} from 'lucide-react';
import Header from './components/Header'
import Leaderboard from './components/Leaderboard'
import { fetchGuildData } from './services/api'

const guildID = '349293115225407488';


export default function App() {

  const [stats, setStats] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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


  return (
    <div className='w-full bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-chinney-purple selection:text-white'> 
      <Header />
      
      <main className=' max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
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
          <Leaderboard stats={stats}/>
        )}
        
      </main>
      
    </div>
  )
}