describe('Favorite Food Filter', function () {
	var $controller;

	var people = [
		{
			name: 'Ann',
			favoriteFood: 'sushi'
		},
		{
			name: 'John',
			favoriteFood: 'pizza'
		},
		{
			name: 'Jane',
			favoriteFood: 'tacos'
		}
	]

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	beforeEach(inject(function ($filter) {
		favoriteFood = $filter('favoriteFood');
	}));

	it('should filter the list by favorite food', function() {
		// expect(favoriteFood(people, 'tacos').length).toBe(1);
		expect(favoriteFood(people, 'tacos').length).toEqual(1);
	});
});
