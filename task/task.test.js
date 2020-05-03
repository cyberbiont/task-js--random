import sut from './task.js';

it('returns null', function () {
	// const results = [];
	// const sorted = {};

	// for (let i = 0; i < 100; i++) {
	// 	results.push(sut(1, 3));
	// }

	// results.forEach((value) => {
	// 	sorted[value]++;
	// });

	expect(sut(1, 3)).toBeGreaterThanOrEqual(1);
	expect(sut(1, 3)).toBeLessThanOrEqual(3);
});
