export const CURRENT_GUILD_ID = 'guild_alpha';

export const MOCK_PLAYERS = [
  { playerID: 'p1', username: 'TurboClicker' },
  { playerID: 'p2', username: 'AerialAce' },
  { playerID: 'p3', username: 'GoalPostHero' },
  { playerID: 'p4', username: 'DemoDemon' },
  { playerID: 'p5', username: 'BoostStarved' },
  { playerID: 'p6', username: 'Rotations' },
  { playerID: 'p7', username: 'FlikReset' },
  { playerID: 'p8', username: 'WhatASave' },
  { playerID: 'p9', username: 'FiftyFifty' },
  { playerID: 'p10', username: 'BackboardRead' }
];

export const MOCK_STATS = [
  { guildID: 'guild_alpha', playerID: 'p1', mmr: 1650, matchesWon: 45, matchesLost: 20, winStreak: 5, losingStreak: 0, gamesWon: 135, gamesLost: 80 },
  { guildID: 'guild_alpha', playerID: 'p2', mmr: 1580, matchesWon: 40, matchesLost: 25, winStreak: 0, losingStreak: 1, gamesWon: 120, gamesLost: 90 },
  { guildID: 'guild_alpha', playerID: 'p3', mmr: 1520, matchesWon: 35, matchesLost: 30, winStreak: 2, losingStreak: 0, gamesWon: 110, gamesLost: 100 },
  { guildID: 'guild_alpha', playerID: 'p4', mmr: 1490, matchesWon: 30, matchesLost: 30, winStreak: 0, losingStreak: 3, gamesWon: 95, gamesLost: 105 },
  { guildID: 'guild_alpha', playerID: 'p5', mmr: 1450, matchesWon: 28, matchesLost: 32, winStreak: 1, losingStreak: 0, gamesWon: 90, gamesLost: 110 },
  { guildID: 'guild_alpha', playerID: 'p6', mmr: 1410, matchesWon: 25, matchesLost: 35, winStreak: 0, losingStreak: 2, gamesWon: 85, gamesLost: 115 },
  { guildID: 'guild_alpha', playerID: 'p7', mmr: 1380, matchesWon: 20, matchesLost: 30, winStreak: 0, losingStreak: 4, gamesWon: 70, gamesLost: 100 },
  { guildID: 'guild_alpha', playerID: 'p8', mmr: 1350, matchesWon: 18, matchesLost: 32, winStreak: 1, losingStreak: 0, gamesWon: 60, gamesLost: 105 },
  { guildID: 'guild_alpha', playerID: 'p9', mmr: 1200, matchesWon: 10, matchesLost: 40, winStreak: 0, losingStreak: 8, gamesWon: 40, gamesLost: 130 },
  { guildID: 'guild_alpha', playerID: 'p10', mmr: 1620, matchesWon: 42, matchesLost: 22, winStreak: 3, losingStreak: 0, gamesWon: 130, gamesLost: 85 },
  { guildID: 'guild_alpha', playerID: 'p11', mmr: 1100, matchesWon: 5, matchesLost: 5, winStreak: 1, losingStreak: 0, gamesWon: 15, gamesLost: 15 },
];

export const MOCK_MATCHES = [
  {
    matchID: 105,
    guildID: 'guild_alpha',
    team1: ['p1', 'p2', 'p3'], // Blue
    team2: ['p4', 'p5', 'p6'], // Orange
    team1Score: 3,
    team2Score: 1,
    status: 'Team 1',
    createdAt: '2023-10-27T14:00:00Z',
  },
  {
    matchID: 104,
    guildID: 'guild_alpha',
    team1: ['p7', 'p8', 'p9'],
    team2: ['p10', 'p1', 'p2'],
    team1Score: 0,
    team2Score: 3,
    status: 'Team 2',
    createdAt: '2023-10-27T12:30:00Z',
  },
  {
    matchID: 103,
    guildID: 'guild_alpha',
    team1: ['p3', 'p5', 'p6'],
    team2: ['p4', 'p8', 'p10'],
    team1Score: 2,
    team2Score: 3,
    status: 'Team 2',
    createdAt: '2023-10-26T18:00:00Z',
  },
];