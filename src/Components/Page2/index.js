import React from 'react'
import Content from './Content/Content'
import style from './index.module.css'
import SideBar from './Sidebar/Sidebar'

const Page2 = () => {
    return(
        <div className={style.content} >
            <div className={style.container}>
                <Content />
                <SideBar />
            </div>
        </div>
    )
}

export default Page2