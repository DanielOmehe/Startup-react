import React from "react";
import Heading from "./Heading";
import style from './Navbar.module.css';
import { Link } from 'react-router-dom'

const NavBar = ({ contents }) => {
    return(
        <nav className={style.navbar} >
            <Heading variant={style.logo} > StartUp </Heading>
            <ul className={style.listItems} >
                {contents.map(({linkText, url, id}) => {
                    return(
                        <li className={style.listItem} key={id}>
                            <Link className={style.navLinks} to={url}> {linkText} </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default NavBar