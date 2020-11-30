import * as ActionType from "./../../constants/ActionType";

let initialState = {
  listGroupCinema: [],
  groupCinemaShowtimes: [],
  chosenGroupCinema: "",
  groupCinemaInfo: {},
};

const cinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_GROUP_CINEMA:
      state.chosenGroupCinema = action.listGroupCinema[0].maHeThongRap;
      state.listGroupCinema = action.listGroupCinema;
      return { ...state };
    case ActionType.GET_GROUP_CINEMA_INFO:
      let groupCinemaInfo = { ...state.groupCinemaInfo };
      groupCinemaInfo[action.maHeThongRap] = action.data;
      return { ...state, groupCinemaInfo: groupCinemaInfo };
    case ActionType.SET_CHOSEN_GROUP_CINEMA:
      state.chosenGroupCinema = action.chosenGroupCinema;
      return { ...state };
    case ActionType.GET_CINEMA_MOVIES:
      state.groupCinemaShowtimes = action.groupCinemaShowtimes;
      return { ...state };
    default:
      return { ...state };
  }
};

export default cinemaReducer;
