import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

import { connect } from 'react-redux';
import { addTodo } from '../actions/todoAction';

import FilterLinks from './FilterLinks';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoText:''
    };

    this.onInputChange   = this.onInputChange.bind(this);
    this.handleClick     = this.handleClick.bind(this);
  }

  onInputChange( event ) {
    this.setState({toDoText:event.target.value})
  }

  handleClick( event ) {
    event.preventDefault();

    if(this.state.toDoText)
      this.props.addTodo( this.state.toDoText );

    this.setState({toDoText:''});
  }

  render() {
    return (
      <div className='col-sm-8'>
        <div className="form-group">
          <input
            onChange    = {this.onInputChange}
            value       = {this.state.toDoText}
            placeholder = "Enter Todo Text"
          /> &nbsp;
          <Button bsStyle="primary" onClick={this.handleClick}>Add Todo</Button>
        </div>
        <div><FilterLinks /></div>
      </div>
    );
  }
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		addTodo: ( todoText ) => {
			dispatch( addTodo( todoText ) );
		}
	};
};

export default connect( null, mapDispatchToProps )( AddTodo );
