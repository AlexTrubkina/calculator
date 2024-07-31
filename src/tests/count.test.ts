import { countOperations, calculateResult  } from '@components/Calculator/utils/count';
import { expect, test } from 'vitest'

test('countOperations', () => {
    expect(countOperations('23')).toEqual(null);
    expect(countOperations('2+2+2')).toEqual(['+', '+']);
});

test('calculateResult', () => {
    expect(calculateResult('23')).toEqual('23');
    expect(calculateResult('2+2-2')).toEqual('2');
    expect(calculateResult('2-2-2')).toEqual('-2');
    expect(calculateResult('2-2+2')).toEqual('2');
});
