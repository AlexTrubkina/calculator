import { buttons } from "../data/buttons";

export const countOperations = (inputValue: string) => {
    const operations: RegExpMatchArray|null = inputValue.match(/[^0-9]/g);
    return operations
}

export const countNumbers = (inputValue: string) => {
    const numbers: RegExpMatchArray|null = inputValue.match(/[0-9]/g);
    return numbers
}

export const defineNextNumber = (numbers: RegExpMatchArray, i: number): number => {
    return +numbers[i + 1]
}

export const calculateResult = (inputValue: string) => {
    const operations: RegExpMatchArray | null = countOperations(inputValue);
    const numbers: RegExpMatchArray | null = countNumbers(inputValue);
    if (!operations) return inputValue;
    if (!numbers) return '0';
    let result: number = +inputValue.slice(0, 1) || 1;
    for (let i = 0; i < operations.length; i++) {
        const nextNumber: number = defineNextNumber(numbers, i);
        console.log(nextNumber);
        
        result = buttons.operators.find((operator) => operator.name === operations[i])!.action!(result, nextNumber);
    }
    return String(result)
}