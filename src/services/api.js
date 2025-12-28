const AWS = `https://r5dvsot262.execute-api.eu-west-1.amazonaws.com`;
const BASE_URL = `${AWS}/default/SixMansLeaderboardAPI`;

export const fetchGuildData = async (guildID) => {
  try {
    const response = await fetch(`${BASE_URL}?guildID=${guildID}`);

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error("Failed to fetch guild data:", error);
    throw error;
  }
}