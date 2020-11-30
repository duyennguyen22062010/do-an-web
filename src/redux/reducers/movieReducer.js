import * as ActionType from "./../../constants/ActionType";

let initialState = {
  listMovie: [],
  detailMovie: {},
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_MOVIE:
      state.listMovie = action.listMovie;
      return { ...state };
    case ActionType.GET_DETAIL_MOVIE:
      state.detailMovie = action.detailMovie;
      return { ...state };
    case ActionType.ADD_MOVIE:
      const listMovie = [...state.listMovie];
      const newMovie = action.payload;
      listMovie.push(newMovie);
      return { ...state, listMovie };
    case ActionType.EDIT_MOVIE:
      const newData = [...state.listMovie];
      newData[newData.indexOf(action.oldData)] = action.payload;
      return { ...state, listMovie: [...newData] };
    case ActionType.DELETE_MOVIE:
      return { ...state, listMovie: [...state.listMovie] };
    case ActionType.UPLOAD_MOVIE_IMG:
      const newUpload = action.payload;
      return {
        ...state,
        listMovie: [...state.listMovie, ...newUpload],
      };
    default:
      return { ...state };
  }
};

export default movieReducer;
