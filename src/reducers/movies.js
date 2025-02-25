import { MOVIE_ACTION_TYPES } from "../actions/movies.actions";

const initialState = {
  data: [],
  error: null
};

// Use the initialState as a default value
export default function MoviesReducer(
  state = initialState,
  action = { type: "", payload: {} }
) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case MOVIE_ACTION_TYPES.SAVE_ALL_MOVIES:
      return { ...state, data: action.payload, error: null };
    case MOVIE_ACTION_TYPES.FETCH_MOVIE_ERROR:
      return {  ...state, data: [], error: action.payload };
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
