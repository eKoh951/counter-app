import React from 'react';
// Importamos @testing-library/jest-dom para que nos aparezcan las sugerencias
//	al momento de escribir codigo de prueba (como .toMatchSnapshot())
//	dicha libraria ya se importa implicitamente, pero lo hacemos explicitamente
//	para este fin
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
// Libreria de testing-library para react
// import { render } from '@testing-library/react';

import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
	// test('debe de mostrar el mensaje "Hola soy Goku"', () => {
	// 	const saludo = 'Hola soy Goku';
	// 	const { getByText } = render(<PrimeraApp saludo={ saludo } />);
	// 	expect(getByText(saludo)).toBeInTheDocument();
	// })

	test('debe de mostrar <PrimeraApp /> correctamente', () => {
		const saludo = 'Hola soy Goku';
		// wrapper contiene el componente renderizado
		const wrapper = shallow(<PrimeraApp saludo={saludo}/>);
		expect(wrapper).toMatchSnapshot();
	})
	
	test('debe de mostrar el subtitulo enviado por props', () => {
		const saludo = 'Hola soy Goku';
		const subtitulo = 'Soy un subtitulo';
		const wrapper = shallow(
			<PrimeraApp
				saludo={saludo}
				subtitulo={subtitulo}
			/>);
		// .find(<DOMelement/>) funciona exactamente igual que .querySelector(<DOMelement/>)
		const textoParrafo = wrapper.find('p').text();
		expect(textoParrafo).toBe(subtitulo);
	})
	

})
