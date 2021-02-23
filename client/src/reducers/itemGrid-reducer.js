const initialState = {
  status: "idle",
  currentItems: null,
  error: null,
};

export default function itemGridReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ITEMS": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_ITEMS": {
      return {
        ...state,
        status: "idle",
        currentItems: action.currentItems,
      };
    }
    case "RECEIVE_ERROR_ITEMS": {
      return {
        ...state,
        status: "error",
      };
    }
    default: {
      return state;
    }
  }
}
