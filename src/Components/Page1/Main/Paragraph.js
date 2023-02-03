import React from "react";

const Paragraph = ({variant, children}) => {
    return(
        <p className={variant}> {children} </p>
    )
}

export default Paragraph