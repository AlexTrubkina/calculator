import { ReactElement } from "react";
import Button from "@components/Button/Button";
import Divider from "@components/Divider/Divider";
import { buttons } from "./data/buttons";
import './Calculator.scss'
import Input from "@components/Input/Input";
import OperationsSignature from "../OperationsSignature/OperationsSignature";

const Calculator = (): ReactElement => {
    return (
        <div className="calculator">
            <OperationsSignature text=""/>
            <Input/>
            <Divider/>
            <div className="calculator__buttons">
                {
                    buttons.map(button => 
                        <Button name={button.name} key={button.name} style={button.style}/>
                    )
                }
            </div>
        </div>
    )
}

export default Calculator;