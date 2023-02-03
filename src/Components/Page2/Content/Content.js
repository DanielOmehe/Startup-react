import React from "react";
import style from './Content.module.css'
import Heading from '../../Page1/Header/Heading'
import Text from '../../Page1/Header/Text'
import Article from '../../Page1/Main/Article'
import Paragraph from '../../Page1/Main/Paragraph'
import Banner from '../../Page1/Main/Banner'
import image2 from '../../../Images/image2.png'
import image3 from '../../../Images/image3.png'

const Content = () => {
    return(
        <div className={style.content}>
            <Heading variant={style.header} >To these in the morning I sent the lead who was to enter the hole</Heading>
            <Text variant={style.date} > 20 DECEMBER </Text>
            <Article variant={style.subHeader} >
                <Paragraph variant={style.paragraph1} >This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red Queen. To her surprise, she lost sight of her in a moment, and found herself walking in at the front-door again.</Paragraph>
                <Paragraph variant={style.paragraph2} >For some minutes Alice stood without speaking, looking out in all directions over the country - and a most curious country it was.</Paragraph>
            </Article>
            <Article variant={style.subTopic} >
                <Heading variant={style.subTopicHeader} >Perfect for Your</Heading>
                <Paragraph variant={style.subTopicText} >The method is this: in an acre of ground you bury, at six inches distance and eight deep, a quantity of acorns, dates, chestnuts, and other mast or vegetables, whereof these animals are fondest  then you drive.</Paragraph>
                <Banner variant={style.banner} image={image2} />
                <Text variant={style.credit} >photo by Denis</Text>
                <Paragraph variant={style.subTopicText2} >The tattered remains of a checked curtain were drawn round the bed's head, to exclude the wind, which, however, made its way into the comfortless room through the numerous chinks in the door.</Paragraph>
                <Banner variant={style.banner} image={image3} />
                <Text variant={style.credit} >photo by Denis</Text>
                <Paragraph variant={style.subTopicText3} >When the last 'natural' had been declared, and the profit and loss account of fish and sixpences adjusted, to the satisfaction of all parties, Mr. Bob Sawyer rang for supper, and the visitors squeezed.</Paragraph>
            </Article>
        </div>
    )
}

export default Content