/**
 * Types
 */

export const Types = {
  ADD_REQUEST: "users/ADD_REQUEST",
  ADD_SUCCESS: "users/ADD_SUCCESS",
  ADD_FAILURE: "users/ADD_FAILURE"
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };

    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload.data],
        error: null
      };

    case Types.ADD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  addUserRequest: (user, cordinates) => ({
    type: Types.ADD_REQUEST,
    payload: { user, cordinates }
  }),

  addUserSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  }),

  addUserFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  })
};
