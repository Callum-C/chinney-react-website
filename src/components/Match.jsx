import { Calendar, Clock, Timer } from 'lucide-react';
import { formatDate, formatDuration, formatTime } from '../helpers/utilityFunctions';
 
export default function renderMatch({ match, players }) {
  const winner = match.status === "Team 1" ? "Team 1" : "Team 2";

  const renderMMRChange = (pid) => {
    const change = match.mmrChanges?.[pid]?.mmr + match.mmrChanges?.[pid]?.bonus;

    if (change === undefined || change === null) return null;

    const isPositive = change > 0;
    const colorClass = isPositive ? 'text-green-400' : (change < 0 ? 'text-red-400' : 'text-slate-500');
    const symbol = isPositive ? '+' : '';

    return (
      <span className={`text-xs font-mono font-bold ${colorClass} opacity-80`}>
        {symbol}{change}
      </span>
    );
  };


  return (
    <div className="bg-slate-900 rounded-lg border border-slate-800 p-4 hover:border-slate-700 transition-all shadow-lg mb-4">
      
      {/*Match Header - Show Match ID, Date, Time, Duration and Winner*/}
      <div className="flex flex-row justify-between items-center mb-4">

        {/*Match Info - ID, Date, Duration*/}
        <div className="flex items-center mb-2 md:mb-0 text-xs text-slate-500 overflow-hidden">

          <span className='px-2 py-0.5 rounded text-xs font-bold bg-slate-800 text-slate-400 mr-2'>
            Match #{match.matchID}
          </span>

          <span className='flex items-center mr-4'>
            <Calendar size={12} className='mr-1.5 opacity-70' title="Date"/> {formatDate(match.createdAt)}
          </span>

          <span className='flex items-center mr-4'>
            <Clock size={12} className='mr-1.5 opacity-70' title="Start Time"/> {formatTime(match.createdAt)}
          </span>

          <span className='hidden sm:flex items-center mr-4'>
            <Timer size={12} className='mr-1.5 opacity-70' title="Duration"/> {formatDuration(match.createdAt, match.updatedAt)}
          </span>

        </div>

        {/*Match Winner in Green Text and Backing*/}
        <div className='px-3 py-1 rounded text-xs font-bold uppercase tracking-wider bg-green-900/20 text-green-400'>
          {winner}
        </div>
      </div>

      {/*Team Cards Container*/}
      <div className='flex items-stretch rounded-lg overflow-hidden border border-slate-800'>

        {/*Team 1 / Blue Team - Team Card*/}
        <div className={`flex-1 p-4 ${winner === 'Team 1' ? 'bg-blue-500/10' : 'bg-slate-900'}`}>
          <div className='flex justify-between items-center mb-3'>
            <div className='text-blue-400 font-bold uppercase tracking-widest text-xs sm:text-sm whitespace-nowrap'>Blue Team</div>
            <span className={`text-2xl font-black ${winner === 'Team 1' ? 'text-white' : 'text-slate-600'}`}>{match.team1Score}</span>
          </div>
          <div>
            {match.team1.map(pid => (
              <div key={pid} className='text-sm text-slate-300 flex items-center'>
                <div className='w-1 h-1 bg-blue-500 rounded-full mr-2'/>

                <span className='mr-2'>
                  {players[pid] ?? "Unknown"}
                </span>
                {renderMMRChange(pid)}
              </div>
            ))}
          </div>
        </div>

        {/*Team Cards Divider*/}
        <div className='w-px bg-slate-800'/>

        {/*Team 2 / Orange Team - Team Card*/}
        <div className={`flex-1 p-4 ${winner === 'Team 2' ? 'bg-orange-500/10' : 'bg-slate-900'}`}>
          <div className='flex justify-between items-center mb-3'>
            <span className={`text-2xl font-black ${winner === 'Team 2' ? 'text-white' : 'text-slate-600'}`}>{match.team2Score}</span>
            <div className="text-orange-400 font-bold uppercase tracking-widest text-xs sm:text-sm whitespace-nowrap text-right">
              Orange Team
            </div>
          </div>
          <div>
            {match.team2.map(pid => (
              <div key={pid} className='text-sm text-slate-300 flex items-center justify-end'>
                
                <span className='mr-2'> {/*Change to ml-2 if mmr change is before the name*/}
                  {players[pid] ?? "Unknown"}
                </span>
                {renderMMRChange(pid) /*Decide on placing this before or after the player's name on orange team*/} 
                <div className='w-1 h-1 bg-orange-500 rounded-full ml-2'/>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}