import React from "react";
import Posts from "./Posts";
import style from './sidebar.module.css'
import seen from '../../../Images/seen.jpg'
import seen2 from '../../../Images/seen2.png'
import seen3 from '../../../Images/seen3.png'
import seen4 from '../../../Images/seen4.png'
import seen5 from '../../../Images/seen5.png'
import NewsLetter from "./NewLetter";
import Button from "./Button";
import popular from '../../../Images/popular.png'
import popular2 from '../../../Images/popular2.png'
import popular3 from '../../../Images/popular3.png'
import popular4 from '../../../Images/popular4.png'
import popular5 from '../../../Images/popular5.png'


const SideBar = () => {
    return(
        <div className={style.sideBar} >
            <Posts 
            variant={style.lastSeen}
            header='Last Seen'
            posts={[
                {
                    image: seen,
                    title: 'To these in the morning I sent the lead who was to...',
                    time: '19 December'
                },
                {
                    image: seen2,
                    title: `When the last 'natural' had been declared, and the profit...`,
                    time: '13 December'
                },
                {
                    image: seen3,
                    title: `Sam's attention that, when this person dismounted…`,
                    time: '21 December'
                },
                {
                    image: seen4,
                    title: 'To these in the morning I sent the lead who was ...',
                    time: '10 December'
                },
                {
                    image: seen5,
                    title: 'The tattered remains of a checked curtain were drawn round...',
                    time: '21 December'
                }
            ]}
            ></Posts>
            <NewsLetter />
            <Posts 
            variant={style.lastSeen}
            header='Most Popular'
            posts={[
                {
                    image: popular,
                    title: 'However, I travelled along the shore of the sea towards the…',
                    time: '14 December'
                },
                {
                    image: popular2,
                    title: `Sam's attention that, when this person dismounted…`,
                    time: '21 December'
                },
                {
                    image: popular3,
                    title: 'To these in the morning I sent the lead who was to...',
                    time: '18 December'
                },
                {
                    image: popular4,
                    title: 'As we passed, I remarked a beautiful church-spire rising…',
                    time: '18 December'
                },
                {
                    image: popular5,
                    title: 'This I have produced as a scantling of Jack’s great...',
                    time: '15 December'
                }
            ]}
            >
            <Button variant={style.button}>Load more</Button>
            </Posts>
        </div>
    )
}

export default SideBar