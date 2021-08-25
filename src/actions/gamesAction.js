import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchedGameURL,
} from "../api";

// Action Creator

export const loadGames = () => async (dispatch) => {
  // Fetch w/ Axios
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newData = await axios.get(newGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newData.data.results,
    },
  });
};

export const fetchSearched = (game_name) => async (dispatch) => {
  const searchedData = await axios.get(searchedGameURL(game_name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchedData.data.results,
    },
  });
};
