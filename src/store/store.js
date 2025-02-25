import { createStore }  from "redux";
import { ROOT_REDUCER } from "../reducers";


export default createStore(ROOT_REDUCER, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());