import React, { Component } from 'react';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<form onSubmit={this.handleSubmit}>
					<input placeholder="Please enter URL here" />
					<button>Submit URL</button>
				</form>
			</div>
		);
	}
	handleSubmit = event => {
		event.preventDefault();
	};
}

export default App;
