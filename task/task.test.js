import sut from './task.js';

it('returns null', function() {
	expect(sut(1, 5)).toBeGreaterThanOrEqual(1);
	expect(sut(1, 5)).toBeLessThanOrEqual(5);
});
