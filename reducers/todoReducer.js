import { Actions, SET_VISIBILITY_FILTERS } from '../constants/ActionTypes';

const todoReducer = ( state = 0, action ) => {
	switch( action.type ) {
		case Actions.LOAD_TODOS:
			state = {...state, todos : action.payload};
			break;

		case SET_VISIBILITY_FILTERS :
			switch( action.payload ){
				case SET_VISIBILITY_FILTERS.ALL :
					state = {...state, filteredTodos : state.todos};
					break;

				case SET_VISIBILITY_FILTERS.ACTIVE :
					var filteredTodoList = state.todos.filter((todo) => {
						return todo.is_completed === false;
					});

					state = {...state, filteredTodos : filteredTodoList};
					break;

				case SET_VISIBILITY_FILTERS.COMPLETED :
					var filteredTodoList = state.todos.filter((todo) => {
						return todo.is_completed === true;
					});

					state = {...state, filteredTodos : filteredTodoList};
					break;
			}
			break;

		case Actions.ADD_TODO:
			state = {
				...state,
				todos :
					[
						...state.todos,
						{
							'id'            : ++state.todos.length,
							'text'          : action.payload,
							'is_completed'  : false
						}
				]
			};

			state = {
				...state,
				filteredTodos : state.todos
			};
			break;

		case Actions.TOGGLE_TODO :
			let modifiedTodoList = state.todos.map( todo => {
				if( todo.id === action.payload ) {
					return {
						...todo,
						is_completed : !todo.is_completed
					}
				}

				return todo;
			});

			state = {...state, todos : modifiedTodoList, filteredTodos : modifiedTodoList};
			break;

		case Actions.DELETE_TODO :
			let remainingTodoList = state.todos.filter( todo => todo.id !== action.payload);
			state = {...state, todos : remainingTodoList, filteredTodos : remainingTodoList};
		break;
	}

	return state;
}

export default todoReducer;
