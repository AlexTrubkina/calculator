import { validateInput } from '@/components/Input/utils/validation'
import { expect, test } from 'vitest'

test('validateInput', () => {
    expect(validateInput('')).toEqual('');
    expect(validateInput('2+2+2')).toEqual('2+2+2');
    expect(validateInput('23')).toEqual('23');
    expect(validateInput('+')).toEqual('');
    expect(validateInput('a')).toEqual('');
    expect(validateInput('2a')).toEqual('2');
});


