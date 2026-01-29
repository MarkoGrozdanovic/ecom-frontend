import { selectUserCheckoutAddress } from "../actions";

const initialState = {
  user: null,
  address: [],
  selectedUserCheckoutAddress: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: action.payload,
      };
      break;

    case "USER_ADDRESSES":
      return {
        ...state,
        address: action.payload,
      };
      break;

    case "SELECT_CHECKOUT_ADDRESS":
      return {
        ...state,
        selectedUserCheckoutAddress: action.payload,
      };
      break;
    case "REMOVE_CHECKOUT_ADDRESS":
      return { ...state, selectedUserCheckoutAddress: null };
    case "LOG_OUT":
      return {
        user: null,
        address: null,
      };
      break;

    default:
      return state;
  }
};
