const initialState = {
  paymentMethod: "Stripe",
};

export const paymentMethodReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PAYMENT_METHOD":
      return {
        ...state,
        paymentMethod: action.payload,
      };
      break;

    default:
      return state;
  }
};
