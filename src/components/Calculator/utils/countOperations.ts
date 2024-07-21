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
        console.log(operations[i].charCodeAt(0));
        
        switch (operations[i].charCodeAt(0)) {
            case 47:
                result /= nextNumber;
                break;
            case 42:
                result *= nextNumber;
                break;
            case 215:
                result *= nextNumber;
                break;
            case 43:
                result += nextNumber;
                break;
            case 45:
                result -= nextNumber;
                break;
            case 37:
                result = (result / 100) * nextNumber;
                break;
            case 8730:   
                result *= Math.sqrt(nextNumber);
                break;
            default:
                console.log('error');
                
                break;
        }
    }
    return String(result)
}