import React from "react";
import Heading from "./Heading";
import style from './Header.module.css'
import Text from './Text'
import Profile from "./Profile";

const Header = () => {
    return(
        <header className={style.header} >
            <div className={style.container} >
                <div className={style.title}>
                    <Heading variant={style.heading}> How To Protect Computer. Very Useful Tips </Heading>
                    <Text variant={style.subHeading}> Splashproof Design </Text>
                </div>
                <div className={style.profile}>
                    <Profile />
                </div>
            </div>
        </header>
    )
}

export default Header