import { combineReducers } from "redux";

// Reducers
import gamesReducer from "./gamesReducer";
import detailsReducer from "./detailsReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  details: detailsReducer,
});

export default rootReducer;
