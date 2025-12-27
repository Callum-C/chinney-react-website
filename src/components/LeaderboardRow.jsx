import { getPlayerName } from '../helpers/utilityFunctions';

export default function renderLeaderboardRow({ player, index }) {

  return (
    <tr key={player.playerID} className='hover:bg-slate-800/50 transition-colors group'>
      <td>{index + 1}</td>
      <td>{getPlayerName(player.playerID)}</td>
      <td>{player.mmr}</td>
      <td><span className='text-green-400 font-bold'>{player.matchesWon}</span> - <span className='text-red-400 font-bold'>{player.matchesLost}</span></td>
      <td>{(player.matchesWon / (player.matchesWon + player.matchesLost)) * 100 + "%"}</td>
      <td>{player.winStreak > 0 ? player.winStreak : player.losingStreak}</td>
      <td><span className='text-green-400'>{player.gamesWon}</span> - <span className='text-red-400'>{player.gamesLost}</span></td>
    </tr>
  );
}