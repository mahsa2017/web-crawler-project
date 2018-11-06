import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		download: false
	};
	render() {
		return (
			<div className="App">
				<form onSubmit={this.handleSubmit}>
					<p>Please select one of the following links</p>
					<select>
						<option value="https://broken-links-api.herokuapp.com/">https://broken-links-api.herokuapp.com/</option>
						<option value="https://web-crawler-test1.herokuapp.com/">https://web-crawler-test1.herokuapp.com/</option>
						<option value="https://web-crawler-test2.herokuapp.com/">https://web-crawler-test2.herokuapp.com/</option>
						<option value="https://random-static-linky-site-01.herokuapp.com/">https://random-static-linky-site-01.herokuapp.com/</option>
						<option value="https://random-static-linky-site-02.herokuapp.com/">https://random-static-linky-site-02.herokuapp.com/</option>
					</select>
					<button>Submit URL</button>
				</form>
				{this.state.download && (
					<a href="example.txt" download>
						Start Automatic Download
					</a>
				)}
			</div>
		);
	}
	handleSubmit = event => {
		event.preventDefault();
		this.setState({
			download: true
		});
	};
}

export default App;
