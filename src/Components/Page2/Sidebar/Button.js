import React from "react";

const Button = ({variant, children}) => {
    return(
        <button className={variant} > {children} </button>
    )
}

export default Button