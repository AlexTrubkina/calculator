export const validateInput = (value: string): string => {
    if (value.length === 1 && value.match(/[/,\\,%,*,+,-,×]/g)) {
        return ''
    }
    return value.replaceAll(/[^(0-9,/,\\,%,*,+,\-,√,×)]/g, '')
}