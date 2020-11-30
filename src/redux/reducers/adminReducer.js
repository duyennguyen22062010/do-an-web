import * as ActionType from "./../../constants/ActionType";

let initialState = {
  listAccount: [],
  authenticated: false,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN_ADMIN:
      return { ...state, authenticated: true };
    case ActionType.LOG_OUT: 
      return {
        ...state,
        authenticated:false
      }
    case ActionType.GET_LIST_ACCOUNT:
      state.listAccount = action.listAccount;
      return { ...state };
    case ActionType.ADD_ACCOUNT:
      const listAccount = [...state.listAccount];
      const newAccount = action.payload;
      listAccount.push(newAccount);
      return { ...state, listAccount };
    case ActionType.EDIT_ACCOUNT:
      const newData = [...state.listAccount];
      newData[newData.indexOf(action.oldData)] = action.payload;
      return { ...state, listAccount: [...newData] };
    case ActionType.DELETE_ACCOUNT:
      return { ...state, listAccuont: [...state.listAccount] };
    default:
      return { ...state };
  }
};

export default adminReducer;
