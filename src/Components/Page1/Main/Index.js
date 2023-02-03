import React from "react";
import Heading from "../Header/Heading";
import Article from "./Article";
import style from './Index.module.css'
import Paragraph from "./Paragraph";
import Banner from "./Banner";
import image from '../../../Images/image.png'
import Text from "../Header/Text";
import Point from "./Points";
import icon from '../../../Images/circle.svg'

const Main = () =>{
    return (
        <main className={style.content} >
            <div className={style.container}>
                <Article variant={style.mainTopic} >
                    <Heading variant={style.heading} > Branding </Heading>
                    <Paragraph variant={style.paragraph} > This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise, she lost sight of her in a moment, and found herself walking in at the front-door again. </Paragraph>
                    <Paragraph variant={style.paragraph} > For some minutes Alice stood without speaking, looking out in all directions over the country - and a most curious country it was. There were a number of tiny little brooks running straight across it from side to side, and the ground between was divided up into squares by a number of little. </Paragraph>
                </Article>
                <Article variant={style.subTopic} >
                    <Heading variant={style.subheading} > Perfect for Your </Heading>
                    <Paragraph variant={style.subparagraph} > She gave my mother such a turn, that I have always been convinced I am indebted to Miss Betsey for having been born on a Friday. The word was appropriate to the moment. </Paragraph>
                   <Banner variant={style.banner} image={image} />
                   <Text variant={style.text} > There have not been any since </Text>
                </Article>
                <Article variant={style.finalTopic} >
                    <Heading variant={style.finalheading} > The Fall Report </Heading>
                    <Paragraph variant={style.finalparagraph} > This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise, she lost sight of her in a moment, and found herself walking in at the front-door again. </Paragraph>
                    <Point icon={icon} text='Thus much I thought proper to tell you in relation to yourself, and to the trust I reposed in you.' />
                    <Point icon={icon} text='Thus much I thought proper to tell you in relation to yourself, and to the trust I reposed in you.' />
                    <Paragraph variant={style.finalparagraph} > She gave my mother such a turn, that I have always been convinced I am indebted to Miss Betsey for having been born on a Friday. The word was appropriate to the moment.</Paragraph>
                </Article>
            </div>
        </main>
    )
}

export default Main