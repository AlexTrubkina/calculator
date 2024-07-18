import Button from "../Button/Button";
import Divider from "../Divider/Divider";
import { buttons } from "./data/buttons";
import './Calculator.scss'
import Input from "../Input/Input";
import OperationsSignature from "../OperationsSignature/OperationsSignature";

const Calculator = (): React.ReactElement => {
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