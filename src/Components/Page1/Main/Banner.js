import React from "react";

const Banner = ({variant, image}) =>{
    return <img className={variant} src={image} alt='Banner' />
}

export default Banner