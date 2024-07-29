import { buttons } from "../data/buttons";

export const countOperations = (inputValue: string) => {
    const operations: RegExpMatchArray|null = inputValue.match(/[^0-9]/g);
    return operations
}

export const defineNextNumber = (operations: RegExpMatchArray, inputValue: string, i: number): number => {
    const operationIndex = inputValue.indexOf(operations[i]);
    if (i === operations.length - 1) {
        return +inputValue.slice(operationIndex + 1, inputValue.length);
    } else {
        const indexOfNextOperation = inputValue.indexOf(operations[i + 1]);
        return +inputValue.slice(operationIndex + 1, indexOfNextOperation);
    }
}

export const calculateResult = (inputValue: string) => {
    const operations: RegExpMatchArray |null = countOperations(inputValue);
    if (!operations) return inputValue;
    let result: number = +inputValue.slice(0, 1) || 1;
    for (let i = 0; i < operations.length; i++) {
        const nextNumber: number = defineNextNumber(operations, inputValue, i);
        result = buttons.operators.find((operator) => operator.name === operations[i])!.action!(result, nextNumber);
        console.log(result);
        
    }
    return String(result)
}