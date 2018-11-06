import React, { Component } from 'react';
import './App.css';
import { brokenLinkCounter } from './api';
const fs = require('fs');
const http = require('http');

class App extends Component {
	state = {
		download: false,
		url: ''
	};

	render() {
		return (
			<div className="App">
				<form onSubmit={event => this.handleSubmit(event)}>
					<select onChange={event => this.handleChange(event.target.value)}>
						<option value="">''Please choose an option--</option>
						<option value="broken-links-api.herokuapp.com">https://broken-links-api.herokuapp.com/</option>
						<option value="web-crawler-test1.herokuapp.com">https://web-crawler-test1.herokuapp.com/</option>
						<option value="web-crawler-test2.herokuapp.com">https://web-crawler-test2.herokuapp.com/</option>
						<option value="random-static-linky-site-01.herokuapp.com">https://random-static-linky-site-01.herokuapp.com/</option>
						<option value="random-static-linky-site-02.herokuapp.com">https://random-static-linky-site-02.herokuapp.com/</option>
					</select>
					<button>Submit URL</button>
				</form>
				{this.state.download && (
					<a href="html.txt" download>
						Start Automatic Download
					</a>
				)}
			</div>
		);
	}
	handleChange = url => {
		this.setState({
			url
		});
	};
	_downloadTxtFile = string => {
		var element = document.createElement('a');
		var file = new Blob([string], { type: 'text/plain' });
		element.href = URL.createObjectURL(file);
		element.download = 'myFile.txt';
		element.click();
	};
	handleSubmit = event => {
		event.preventDefault();
		brokenLinkCounter(this.state.url, (err, brokenlinks) => {
			//console.log(brokenlinks);
			this._downloadTxtFile(JSON.stringify(brokenlinks));
			// fs.writeFile('html.txt', JSON.stringify(brokenlinks), err => {
			// 	if (err) throw err;
			// });
		});
		this.setState({
			download: true
		});
	};
}

export default App;
