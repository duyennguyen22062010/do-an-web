import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import cinemaReducer from "./cinemaReducer";
import homeToolReducer from "./homeToolReducer";
import userReducer from "./userReducer";
import adminReducer from "./adminReducer";

export default combineReducers({
  movieReducer, //   movieReducer: movieReducer
  cinemaReducer, // cinemaReducer: cinemaReducer
  homeToolReducer,
  userReducer,
  adminReducer,
});
