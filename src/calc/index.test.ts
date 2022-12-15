import { describe, expect, test } from '@jest/globals';
import { Calc } from './';

describe('calc module', () => {
    test('adds 5 + 10 to equal 15', () => {
        expect(new Calc().add(5, 10)).toBe(15);
    });

    test('shoult correctly subtract', () => {
        expect(new Calc().subtract(10, 5)).toBe(5);
    });
});
