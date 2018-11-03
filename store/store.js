import { combineReducers, createStore, applyMiddleware } from 'redux';

import promise 					from "redux-promise-middleware";
import thunk 						from "redux-thunk";
import { createLogger } from "redux-logger";

import todoLists from '../reducers/todoReducer';

const reducers = combineReducers({
	todos : todoLists
})

const middleware 	= applyMiddleware(  promise(),  thunk,  createLogger() );
const store 			= createStore( reducers, middleware );

export default store;
