import React, {Component} from 'react';
import Todo from './Todo';

import { connect } from 'react-redux';
import { loadTodos } from '../actions/todoAction';

class ToDoLists extends React.Component {
  componentDidMount() {
    this.props.loadTodos();
  }

  render() {
    if( typeof(this.props.todos) === 'undefined') {
      return(<div className='col-sm-8'>No Todos are available!</div>);
    }

    if( this.props.todos.length === 0
      || ( typeof(this.props.filteredTodos) !== 'undefined' && this.props.filteredTodos.length === 0) ) {
      return(<div className='col-sm-8'>No more todos in list!</div>);
    }

    let todoListArr = this.props.filteredTodos || this.props.todos;

    const todoLists = todoListArr.map( (todo) => {
      return (
          <Todo
            key  = {todo.id}
            todo = {todo}
          />
      )
    });

    return (
      <div className='col-sm-8'>
        <ul className='list-group'>
          {todoLists}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => {
	return {
    todos : state.todos.todos,
    filteredTodos : state.todos.filteredTodos
	};
};

const mapDispatchToProps = ( dispatch ) => {
	return {
		loadTodos: () => {
			dispatch( loadTodos() );
		}
	};
};

export default connect( mapStateToProps, mapDispatchToProps )( ToDoLists );
