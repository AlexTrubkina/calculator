import { ReactElement, useState } from "react";
import Button from "@components/Button/Button";
import Divider from "@components/Divider/Divider";
import { buttons } from "./data/buttons";
import { calculateResult } from "./utils/countOperations.ts";
import './Calculator.scss'
import Input from "@components/Input/Input";
import OperationsSignature from "../OperationsSignature/OperationsSignature";

const Calculator = (): ReactElement => {
    const [inputValue, setInputValue] = useState('');
    const [signatureText, setSignatureText] = useState('');

    const onClickButton = (value: string) => {
        let result: string = '';
        switch (value) {
            case 'C':
                setInputValue('');
                break;
            case '=': 
                setSignatureText(inputValue);
                result = calculateResult(inputValue);
                setInputValue(result);
                break;
            default:
                setInputValue((prevValue) => prevValue += value);
                break;
        }
    }

    return (
        <div className="calculator">
            <OperationsSignature text={signatureText}/>
            <Input setInputValue={setInputValue} inputValue={inputValue}/>
            <Divider/>
            <div className="calculator__buttons">
                {
                    buttons.map(button => 
                        <Button name={button.name} key={button.name} style={button.style} onClick={onClickButton}/>
                    )
                }
            </div>
        </div>
    )
}

export default Calculator;