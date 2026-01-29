const initialState = {
  isLoading: false,
  errorMessage: null,
  categoryLoader: false,
  categoryError: null,
  btnLoader: false,
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "IS_FETCHING":
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      };
      break;

    case "BUTTON_LOADER":
      return {
        ...state,
        btnLoader: true,
        errorMessage: null,
        categoryError: null,
      };
      break;

    case "IS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        btnLoader: false,
        categoryError: null,
        categoryLoader: false,
      };
      break;

    case "IS_ERROR":
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
        btnLoader: false,
        categoryLoader: false,
      };
      break;

    case "CATEGORY_SUCCESS":
      return {
        ...state,
        categoryLoader: false,
        errorMessage: null,
        categoryError: null,
      };
      break;

    case "CATEGORY_LOADER":
      return {
        ...state,
        categoryLoader: true,
        errorMessage: null,
        categoryError: null,
      };
      break;

    default:
      return state;
      break;
  }
};
