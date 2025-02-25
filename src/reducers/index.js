import { combineReducers } from 'redux';
import TodosReducer from './todos';
import MoviesReducer from './movies';


export const ROOT_REDUCER = combineReducers({
    todos: TodosReducer,
    movies: MoviesReducer
})