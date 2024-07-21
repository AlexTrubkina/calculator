import { ReactElement, Dispatch } from "react";
import { validateInput } from "./utils/validation";
import "./Input.scss";

const Input = ({
    setInputValue,
    inputValue,
}: {
    setInputValue: Dispatch<React.SetStateAction<string>>;
    inputValue: string;
}): ReactElement => {
    const onInput = (value: string) => {
        setInputValue(validateInput(value));
    };

    return (
        <input
            type="text"
            value={inputValue}
            onChange={(e) => onInput(e.currentTarget.value)}
            className="input"
        />
    );
};

export default Input;
