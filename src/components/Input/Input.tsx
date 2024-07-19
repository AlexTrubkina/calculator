import { ReactElement, useState } from "react";
import { validateInput } from "./helpers/validation";
import "./Input.scss"

const Input = (): ReactElement => {

    const [inputValue, setInputValue] = useState('');

    const onInput = (value: string) => {
        setInputValue(validateInput(value))
    }

    return (
        <input type="text" value={inputValue} onChange={(e) =>onInput(e.currentTarget.value)} className="input"/>
    )
}

export default Input;