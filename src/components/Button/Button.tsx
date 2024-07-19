import { ReactElement } from "react";
import './Button.scss'
import { BtnStyle } from "@/utils/types";

const Button = ({name, style}: {name: string, style: string}): ReactElement => {
    return(
        <button className={"button" + (style === BtnStyle.Fill ?  " button_fill" : "")}>
            {name}
        </button>
    )
}

export default Button