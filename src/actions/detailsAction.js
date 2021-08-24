import axios from "axios";
import { gameDetailsURL, gameScreenshotsURL } from "../api";

export const loadDetails = (id) => async (dispatch) => {
  dispatch({ type: "LOADING_DETAILS" });

  const detailData = await axios.get(gameDetailsURL(id));
  const screenshotData = await axios.get(gameScreenshotsURL(id));

  dispatch({
    type: "GET_DETAILS",
    payload: {
      game: detailData.data,
      screen: screenshotData.data,
    },
  });
};
