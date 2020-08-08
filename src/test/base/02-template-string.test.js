import '@testing-library/jest-dom'
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () => {
	test('getSaludo debe de retornar Hola Erick', () => {
		const nombre = 'Erick';
		
		const saludo = getSaludo(nombre);

		expect(saludo).toBe('Hola ' + nombre);
	})

	test('getSaludo debe de retornar Hola Carlos si no hay argumento', () => {
		expect(getSaludo()).toBe(`Hola Carlos`);
	})
})
