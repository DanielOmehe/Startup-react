import React from "react";
import style from './point.module.css';
import Text from "../Header/Text";

const Point = ({icon, text }) => {
    return(
        <div className={style.point}>
            <img className={style.icon} src={icon} alt='icon' />
            <Text variant={style.pointText} > {text} </Text>
        </div>
    )
}

export default Point