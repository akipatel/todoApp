import React, {Component} from 'react';
import ToDoLists from '../components/ToDoLists';
import AddTodo from '../components/AddTodo';

class App extends React.Component {
	render() {
		return (
			<div className='container'>
				<h1>Todo Application</h1>
				<AddTodo />
				<ToDoLists />
			</div>
		);
	}
}

export default App;
