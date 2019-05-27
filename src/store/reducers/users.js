const INITIAL_STATE = {
  loading: false,
  data: [],
  error: ""
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_USER_REQUEST":
      return { ...state, loading: true };

    case "ADD_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload.data],
        error: null
      };

    case "ADD_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    default:
      return state;
  }
}
