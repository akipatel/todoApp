import { Actions, SET_VISIBILITY_FILTERS } from '../constants/ActionTypes';
import todos from '../api/todoList.json';

export function loadTodos() {
	return {
		type 		: Actions.LOAD_TODOS,
		payload	: todos
	}
}

export function addTodo( todoText ) {
	return {
		type 		: Actions.ADD_TODO,
		payload	: todoText
	};
}

export function toggleTodo( id ) {
	return {
		type 		: Actions.TOGGLE_TODO,
		payload : id
	};
}

export function deleteTodo( id ) {
	return {
		type 		: Actions.DELETE_TODO,
		payload	: id
	}
}

export function setVisibilityFilter( filter ) {
	return {
		type 		: SET_VISIBILITY_FILTERS,
		payload	: filter
	}
}
