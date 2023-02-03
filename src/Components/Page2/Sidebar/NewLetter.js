import React from "react";
import Heading from "../../Page1/Header/Heading";
import Text from "../../Page1/Header/Text";
import Button from "./Button";
import Input from "./input";
import style from './NewsLetter.module.css'

const NewsLetter = () => {
    return(
        <div className={style.newsLetter} >
            <Heading variant={style.title} >NewsLetter</Heading>
            <Text variant={style.subTitle} > Get our news earlier, let’s get in touch. </Text>
            <form className={style.form} >
                <Input variant={style.input} type='text' text='Your email' />
                <Button variant={style.button} > Send </Button>
            </form>
        </div>
    )
}

export default NewsLetter