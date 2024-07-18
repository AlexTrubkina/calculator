import React from "react";
import './Button.scss'

const Button = ({name, style}: {name: string, style: string}): React.ReactElement => {
    return(
        <button className={"button" + (style === "fill" ?  " button_fill" : "")}>
            {name}
        </button>
    )
}

export default Button