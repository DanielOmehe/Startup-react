import React from "react";

const Article = ({variant, heading, desc, children}) => {
    return(
        <div className={variant}>
            {children}
        </div>
    )
}

export default Article