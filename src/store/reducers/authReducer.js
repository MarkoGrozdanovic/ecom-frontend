import { selectUserCheckoutAddress } from "../actions";

const initialState = {
  user: null,
  address: [],
  clientSecret: null,
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
    case "CLIENT_SECRET":
      return { ...state, clientSecret: action.payload };
    case "REMOVE_CLIENT_SECRET_ADDRESS":
      return {
        ...state,
        clientSecret: null,
        selectedUserCheckoutAddress: null,
      };
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
