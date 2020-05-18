// COMMENT OUT THE (jest) IMPORT TO MAKE THIS WORK AGAIN
import { jest, it, expect } from "@jest/globals";
// import { it, expect } from "@jest/globals";
jest.mock('./mocked.ts');

import { add } from './add';

it('should properly add', () => {
	expect(add(1, 2)).toBe(3);
});
