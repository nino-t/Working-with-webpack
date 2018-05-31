import React from 'react'
import ReactDOM from 'react-dom'

import './public/assets/styles.scss'

class App extends React.Component {
	render() {
		return (
			<div>
				<center>
				<h1>Burger food</h1>
					<img src="./assets/a.png" />
				</center>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('react'))

