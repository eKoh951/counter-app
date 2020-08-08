import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import CounterApp from '../CounterApp';
	let wrapper = shallow(<CounterApp />);

	beforeEach(() => {
		wrapper = shallow(<CounterApp />);
	});

describe('Pruebas para el <CounterApp />', () => {
	test('debe de mostrar <CounterApp /> correctamente', () => {
		// Usamos la funcion 'shallow' para renderizar el componente CounterApp
		expect(wrapper).toMatchSnapshot();
	});
	
	test('debe de mostrar la cuenta con el valor de 100', () => {
		const value = 100;
		const wrapper = shallow(<CounterApp value={value} />);
		expect(wrapper.find('h2').text()).toContain(`${value}`);
	});

	test('debe de aumentar el valor con el boton +1', () => {
		wrapper.find('button').at(0).simulate('click');
		const counterText = wrapper.find('h2').text().trim();
		expect(counterText).toBe('11');
	});

	test('debe de disminuir el valor con el boton -1', () => {
		wrapper.find('button').at(1).simulate('click');
		const counterText = wrapper.find('h2').text().trim();
		expect(counterText).toBe('9');
	});

	test('debe de resetear el valor con el boton Reset', () => {
		const cuenta = 105;
		const wrapper = shallow(<CounterApp value={cuenta} />);
		wrapper.find('button').at(0).simulate('click');
		wrapper.find('button').at(2).simulate('click');
		const counterText = wrapper.find('h2').text().trim();
		expect(counterText).toBe(`${cuenta}`);
	});
	
})
