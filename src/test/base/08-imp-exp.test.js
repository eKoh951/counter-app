import {getHeroeById, getHeroesByOwner} from '../../base/08-imp-exp'
import heroes from '../../data/heroes'

describe('Prueba de 08-imp-exp.js', () => {
	test('debe de retornar un objeto', () => {
		const id = 1;
		const heroe = getHeroeById(id);
		const heroeData = heroes.find(heroe => heroe.id = id);
		expect(heroe).toEqual(heroeData);
	})

	test('debe de retornar undefined si heroe no existe', () => {
		const id = 10;
		const heroe = getHeroeById(id);
		expect(heroe).toBe(undefined);
	})
	
	test('debe de retornar un arreglo con los heroes de DC', () => {
		const owner = 'DC';
		const heroes = getHeroesByOwner(owner);
		const heroesData = heroes.filter( heroe => heroe.owner === owner);
		expect(heroes).toEqual(heroesData);
	})

	test('debe de retornar un arreglo con los heroes de marvel', () => {
		const owner = 'Marvel';
		const heroes = getHeroesByOwner(owner);
		expect(heroes.length).toBe(2);
	})
	
	

})
