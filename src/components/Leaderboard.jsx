import React from 'react';
import { MOCK_PLAYERS, MOCK_STATS, MOCK_MATCHES } from '../data/mockData';
import { getPlayerName } from '../helpers/utilityFunctions';

const TABLE_HEADERS = [
  {label: "Rank", id: "rank"},
  {label: "Player", id: "player"},
  {label: "MMR", id: "mmr"},
  {label: "Matches (W-L)", id: "matches"},
  {label: "Win %", id: "win_percent"},
  {label: "Streak", id: "streak"},
  {label: "Games (W-L)", id: "games"}
];

export default function renderLeaderboard() {

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
              {MOCK_STATS.map((player, index) => {
                return (
                  <tr key={player.playerID} className='hover:bg-slate-800/50 transition-colors group'>
                    <td>{index + 1}</td>
                    <td>{player.playerID}</td>
                    <td>{player.mmr}</td>
                    <td><span className='text-green-400 font-bold'>{player.matchesWon}</span> - <span className='text-red-400 font-bold'>{player.matchesLost}</span></td>
                    <td>{(player.matchesWon / (player.matchesWon + player.matchesLost)) * 100 + "%"}</td>
                    <td>{player.winStreak > 0 ? player.winStreak : player.losingStreak}</td>
                    <td><span className='text-green-400'>{player.gamesWon}</span> - <span className='text-red-400'>{player.gamesLost}</span></td>

                  </tr>
                );
              })}
          </tbody>

        </table>
      </div>
    </div>
  );
}
