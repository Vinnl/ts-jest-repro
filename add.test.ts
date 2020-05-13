import { add } from './add';
import { subtract } from './index';

it('should properly add', () => {
	expect(add(1, 2)).toBe(3);
});

it('should properly subtract', () => {
	expect(subtract(5, 2)).toBe(3);
});

