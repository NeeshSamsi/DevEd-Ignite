require("dotenv").config();

// Base Url
const base_url = process.env.REACT_APP_BASE_URL;

// Get current day, month and year
const getCurrentDate = () => {
  const currentDate = new Date().toISOString().slice(0, 10);

  const year = currentDate.slice(0, 4);
  const month = currentDate.slice(5, 7);
  const day = currentDate.slice(8, 10);
  return {
    current: currentDate,
    year: year,
    month: month,
    day: day,
    lastYear: `${parseInt(year) - 1}-${month}-${day}`,
    nextYear: `${parseInt(year) - 1}-${month}-${day}`,
  };
};

// Popular Games
const popular_games = `games?dates=${getCurrentDate().lastYear},${
  getCurrentDate().current
}&ordering=-rating&page_size=10&key=${process.env.REACT_APP_API_KEY}`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
