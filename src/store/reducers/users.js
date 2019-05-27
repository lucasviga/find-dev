const INITIAL_STATE = {
  loading: false,
  data: []
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_USER_REQUEST":
      return { ...state, loading: true };

    case "ADD_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload.data]
      };

    default:
      return state;
  }
}
