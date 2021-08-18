import { combineReducers } from "redux";

// Reducers
import gamesReducer from "./gamesReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
});

export default rootReducer;
