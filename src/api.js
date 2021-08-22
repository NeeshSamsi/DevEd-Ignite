require("dotenv").config();

// Base Url
const base_url = "https://api.rawg.io/api/";
const api_key = "6f563b35a7e3493299a92f278245e4d5";

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
    nextYear: `${parseInt(year) + 1}-${month}-${day}`,
  };
};

// Popular Games
const popular_games = `games?dates=${getCurrentDate().lastYear},${
  getCurrentDate().current
}&ordering=-rating&page_size=10&key=${api_key}`;
const upcoming_games = `games?dates=${getCurrentDate().current},${
  getCurrentDate().nextYear
}&ordering=-added&page_size=10&key=${api_key}`;
const new_games = `games?dates=${getCurrentDate().lastYear},${
  getCurrentDate().current
}&ordering=-released&page_size=10&key=${api_key}`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;

export const newGamesURL = () => `${base_url}${new_games}`;
