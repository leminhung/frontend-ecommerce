import { AuthActionsEnum } from "./user.action";

const initState = {
  loading: false,
  isAuthenticated: false,
  user: {},
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case AuthActionsEnum.LOADING:
      return {
        loading: true,
        isAuthenticated: false,
      };

    case AuthActionsEnum.SET_DATA:
      return {
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case AuthActionsEnum.FAILED:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case AuthActionsEnum.STOP_LOADING:
      return {
        ...state,
        loading: false,
      };

    // case LOGOUT_FAIL:
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };

    // case LOGOUT_AUTO_SUCCESS:
    // case LOGOUT_SUCCESS:
    //   return {
    //     loading: false,
    //     isAuthenticated: false,
    //     user: null,
    //     error: action.payload,
    //   };

    // case CLEAR_ERRORS:
    //   return {
    //     ...state,
    //     error: null,
    //   };

    default:
      return state;
  }
};
