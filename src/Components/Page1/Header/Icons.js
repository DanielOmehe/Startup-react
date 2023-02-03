import React from "react";

const Icons = ({ images }) => {
    return (
        <>
            {images.map((image, id) => <img key={id} src={image} alt='icon' />)}
        </>
    )
}

export default Icons