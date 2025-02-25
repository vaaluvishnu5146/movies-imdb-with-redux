import { TODO_ACTION_TYPES } from "../actions/todos.actions"

const initialState = {
    data: []
  }
  
  // Use the initialState as a default value
  export default function TodosReducer(state = initialState, action = { type: "", payload: {} }) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      // Do something here based on the different types of actions
      case TODO_ACTION_TYPES.SAVE_TODO:
        return {  ...state, data: [...state.data, action.payload] }
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state
    }
  }