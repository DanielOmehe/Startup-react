import React from "react";

const Heading = ({variant, children}) => {
    return(
        <h1 className={variant} > {children} </h1>
    )
}

export default Heading