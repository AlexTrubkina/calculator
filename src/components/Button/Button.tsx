import { ReactElement } from "react";
import './Button.scss'
import { BtnStyle } from "@/utils/types";

const Button = ({name, style, onClick}: {name: string, style: string, onClick: (value: string) => void}): ReactElement => {
    return(
        <button onClick={() => onClick(name)} className={"button" + (style === BtnStyle.Fill ?  " button_fill" : "")}>
            {name}
        </button>
    )
}

export default Button