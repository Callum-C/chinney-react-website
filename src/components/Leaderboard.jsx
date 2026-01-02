import LeaderboardRow from './LeaderboardRow';
import LeaderboardColumnHeader from './LeaderboardColumnHeader';

const TABLE_HEADERS = [
  {label: "Rank", id: "rank"},
  {label: "Player", id: "player"},
  {label: "MMR", id: "mmr"},
  {label: "Matches (W-L)", id: "matchesWon"},
  {label: "Win %", id: "winPercentage"},
  {label: "Streak", id: "streak"},
  {label: "Games (W-L)", id: "games"}
];

const SORTABLE_HEADERS = [
  "mmr", "matchesWon", "winPercentage"
];

export default function renderLeaderboard({stats, isPlaced, sortConfig, onSort}) {
  if (!stats || stats.length === 0) return null;

  const title = isPlaced ? "Ranked" : "Unranked";

  return (
    <div className=''>
      <h2 className='text-xl font-bold text-white my-4 pl-1'>{title}</h2>
      <div className='bg-slate-900 rounded-xl border border-slate-800 overflow-hidden shadow-xl mb-8'>
        { /* Leaderboard Background  */ }
        <div className='overflow-x-auto'>
          { /* Leaderboard Container */ }
          <table className='min-w-full table-auto'>

            <thead className='bg-slate-950/50 text-white border-b border-slate-800'>
              <tr>
                {TABLE_HEADERS.map((heading) => {
                  return (
                    <LeaderboardColumnHeader 
                      key={heading.id}
                      sortHeaders={SORTABLE_HEADERS}
                      header={heading}
                      sortConfig={sortConfig}
                      onSort={onSort}
                    />
                  );
                })}
              </tr>
            </thead>

            <tbody>
              {stats.map((player, index) => {
                return (
                  <LeaderboardRow 
                    key={player.username} 
                    player={player} 
                    index={index}
                    sortConfig={sortConfig}
                    isPlaced={isPlaced}
                  />
                );
              })}
            </tbody>

          </table>
        </div>
      </div>
    </div>
    
  );
}
