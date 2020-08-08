// import React, { Fragment } from 'react';
import React from 'react';
// These are the types of the properties that the component should receive
import PropTypes from 'prop-types';

// Functional Component
const PrimeraApp = ( { saludo, subtitulo } ) => {
	return (
		<>
			{/* <pre>{, null, 3) }</pre> */}
			<h1>{ saludo }</h1>
			<p>{ subtitulo }</p>
		</>
	);
}

// We can define the type of the properties of the component
PrimeraApp.propTypes = {
	saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
	subtitulo: ''
}

export default PrimeraApp;