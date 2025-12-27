import { MOCK_PLAYERS } from '../data/mockData';

export const getPlayerName = (id) => {
  const player = MOCK_PLAYERS.find(p => p.playerID === id);
  return player ? player.username : 'Unknown';
}

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  // TODO: Improve date formatting.
  return date;
}