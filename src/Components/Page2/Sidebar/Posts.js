import React from "react";
import style from './Posts.module.css'
import Heading from "../../Page1/Header/Heading";
import Text from "../../Page1/Header/Text";

const Posts = ({variant, header, posts, children}) => {
    return(
        <div className={variant} >
            <Heading variant={style.header} >{header}</Heading>
            <div className={style.posts}>
            {posts.map((post, id) => {
                const {image, title, time} = post;
                return(
                    <div key={id} className={style.post}>
                        <div className={style.image}>
                            <img src={image} alt='avatar' />
                        </div>
                        <div className={style.text} >
                            <Heading variant={style.title}>{title}</Heading>
                            <Text variant={style.time} > {time} </Text>
                        </div>
                    </div>
                )
            })}
            {children}
            </div>
        </div>
    )
}

export default Posts