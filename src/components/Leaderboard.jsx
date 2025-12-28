import LeaderboardRow from './LeaderboardRow';

const TABLE_HEADERS = [
  {label: "Rank", id: "rank"},
  {label: "Player", id: "player"},
  {label: "MMR", id: "mmr"},
  {label: "Matches (W-L)", id: "matches"},
  {label: "Win %", id: "win_percent"},
  {label: "Streak", id: "streak"},
  {label: "Games (W-L)", id: "games"}
];

export default function renderLeaderboard({stats, season}) {

  return (
    <div className='bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-xl'>
      { /* Leaderboard Background  */ }
      <div className='overflow-x-auto'>
        { /* Leaderboard Container */ }
        <table className='min-w-full divide-y divide-slate-800'>

          <thead className='bg-slate-950/50 text-white'>
            <tr>
              {TABLE_HEADERS.map((heading) => {
                return (
                  <th 
                    className='px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider w-16' 
                    key={heading.id}
                  >{heading.label}</th>
                );
              })}
            </tr>
          </thead>

          <tbody className='divide-y divide-slate-800'>
              {stats[season].map((player, index) => {
                return (
                  <LeaderboardRow key={player.username} player={player} index={index}/>
                );
              })}
          </tbody>

        </table>
      </div>
    </div>
  );
}
