import React, { useState } from 'react'
import PropTypes from 'prop-types'
const CounterApp = ({ value = 10 }) => {
	const [ counter, setCounter ] = useState( value );

	const handleAdd = (e) => {
		setCounter( counter + 1 );
		// setCounter( (c) => c + 1 );
	}

	const handleSubtract = (e) => {
		setCounter( counter - 1);
	}

	const handleReset = (e) => {
		// setCounter( (c) => c = value )
		setCounter(value);
	}
	return (
		<>
			<h1>CounterApp</h1>
			<h2>{counter}</h2>
			<button onClick={ handleAdd }>+1</button>
			<button onClick={ handleSubtract }>-1</button>
			<button onClick={ handleReset }>Reset</button>
			{/* <button onClick={ () => setCounter( counter - 1)}>-1</button> */}
			{/* <button onClick={ () => setCounter( value )}>Reset</button> */}
			{/* <button onClick={ () => setCounter( value )}>Reset</button> */}
		</>
	);
}

CounterApp.propTypes = {
	value: PropTypes.number
}

export default CounterApp;