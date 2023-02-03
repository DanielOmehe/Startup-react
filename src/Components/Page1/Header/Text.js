import React from "react";

const Text = ({variant, children}) => {
    return <p className={variant}> {children} </p>
}

export default Text