import React from "react";
import style from './Profile.module.css'
import avatar from '../../../Images/avatar.png'
import Heading from "./Heading";
import Text from "./Text";
import Icons from "./Icons";
import facebook from '../../../Images/facebook.svg';
import instagram from '../../../Images/instagram.svg';
import dribble from '../../../Images/dribble.svg';
import twitter from '../../../Images/twitter.svg';

const Profile = () => {
    return(
        <>
            <div className={style.avatar}> 
                <img src={avatar} alt='avatar' />
            </div>
            <div>
                <div className={style.title}>
                    <Heading variant={style.heading} > Samuel Audley </Heading>
                    <Text variant={style.subheading} > Saving the world. Shaping the world. </Text>
                </div>
                <div className={style.icons}>
                    <Icons images={[twitter, facebook, dribble, instagram]} />
                </div>
            </div>
        </>
    )
}

export default Profile