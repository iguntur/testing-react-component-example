import React from 'react';
import './style.css';

function App(props) {
	const name = props.name || 'world';

	return <div className='App'>Hello, {name}</div>;
}

export default App;
