import { KeyboardEvent, ReactElement, useState } from "react";
import Button from "@components/Button/Button";
import Divider from "@components/Divider/Divider";
import { buttons } from "./data/buttons";
import { calculateResult, checkExpression } from "./utils/count.ts";
import './Calculator.scss'
import Input from "@components/Input/Input";
import OperationsSignature from "../OperationsSignature/OperationsSignature";
import { validateInput } from "../Input/utils/validation.ts";
import Toast from "../Toast/Toast.tsx";

const Calculator = (): ReactElement => {
    const [inputValue, setInputValue] = useState('');
    const [signatureText, setSignatureText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onClickButton = (value: string) => {
        try {
            let result: string = '';
            switch (value) {
                case 'C':
                    setInputValue('');
                    break;
                case '=':
                    checkExpression(inputValue);
                    setSignatureText(inputValue);
                    result = calculateResult(inputValue);
                    setInputValue(result);
                    break;
                default:
                    setInputValue((prevValue) => prevValue = validateInput(prevValue + value));
                    break;
            }
        } catch (error) {
            if (error instanceof Error) setErrorMessage(error.message)
            setTimeout(() => setErrorMessage(''), 5000)
        }

    }

    const onKeyDownCalculator = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onClickButton('=');
        }
        if (e.key === 'Escape') {
            onClickButton('C');
        }
    }

    return (
        <div className="calculator" onKeyDown={onKeyDownCalculator}>
            <OperationsSignature text={signatureText} />
            <Input setInputValue={setInputValue} inputValue={inputValue} />
            <Divider />
            <div className="calculator__buttons">
                <div className="calculator__buttons_left">
                    {
                        buttons.operators.slice(0, 3).map(button =>
                            <Button name={button.name} key={button.name} style={button.style} onClick={onClickButton} />
                        )
                    }
                    {
                        buttons.numbers.map(button =>
                            <Button name={button.name} key={button.name} style={button.style} onClick={onClickButton} />
                        )
                    }
                </div>
                <div className="calculator__buttons_right">
                    {
                        buttons.operators.slice(3, buttons.operators.length).map(button =>
                            <Button name={button.name} key={button.name} style={button.style} onClick={onClickButton} />
                        )
                    }
                </div>
            </div>
            {errorMessage && <Toast message={errorMessage} />}
        </div>
    )
}

export default Calculator;