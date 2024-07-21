import { countOperations } from '@components/Calculator/utils/countOperations';
import { expect, test } from 'vitest'

test('countOperations', () => {
    expect(countOperations('23')).toEqual(null);
    expect(countOperations('2+2+2')).toEqual(['+', '+']);
});
