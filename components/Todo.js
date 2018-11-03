import React, { Component } from 'react';

import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions/todoAction';


class Todo extends React.Component {
  toggleTodo( id ) {
    this.props.toggleTodo( id );
  }

  deleteTodo( id ) {
    this.props.deleteTodo( id );
  }

  render() {
    const todo = this.props.todo;
    let text;

    if (todo.is_completed) {
      text = <strike>{todo.text}</strike>;
    } else {
      text = <span>{todo.text}</span>;
    }

    return (
      <div className="row">
        <div className="col-sm-10">
          <li onClick={this.toggleTodo.bind(this,todo.id)} className='list-group-item clearfix' style={{cursor: 'pointer'}}>
            {text}
          </li>
        </div>
        <div className="col-sm-2 text-right">
          <span className="pull-right button-group" onClick={this.deleteTodo.bind(this,todo.id)}>
              <button type="button" className="btn btn-danger" style={{height: '45px'}}><span className="glyphicon glyphicon-remove"></span>X</button>
          </span>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		toggleTodo: ( id ) => {
			dispatch( toggleTodo( id ) );
		},
    deleteTodo: ( id ) => {
      dispatch( deleteTodo( id ) );
    }
	};
};

export default connect( null, mapDispatchToProps )( Todo );
