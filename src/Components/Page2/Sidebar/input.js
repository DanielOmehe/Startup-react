import React from "react";

const Input = ({variant, type, text}) => {
    return <input className={variant} type={type} placeholder={text} />
}

export default Input