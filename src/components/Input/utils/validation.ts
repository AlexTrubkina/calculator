export const validateInput = (value: string): string => {
    return value.replaceAll(/[^(0-9,/,\\,%,*,+,\-)]/g, '')
}