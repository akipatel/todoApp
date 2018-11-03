import React from 'react';

import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/todoAction';

import { Actions } from '../constants/ActionTypes';

class FilterLinks extends React.Component {
  setFilter( filter ) {
    this.props.setVisibilityFilter( filter );
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-link" onClick={this.setFilter.bind(this, 'ALL')}>ALL</button>
        <button type="button" className="btn btn-link" onClick={this.setFilter.bind(this, 'ACTIVE')}>ACTIVE</button>
        <button type="button" className="btn btn-link" onClick={this.setFilter.bind(this, 'COMPLETED')}>COMPLETED</button>
      </div>
    );
  }
}

const mapDispatchToProps = ( dispatch ) => {
	return {
		setVisibilityFilter: ( filter ) => {
			dispatch( setVisibilityFilter( filter ) );
		}
	};
};

export default connect( null, mapDispatchToProps )( FilterLinks );
