import React, {useState} from 'react';
import s from "./Menu.module.css"
import Link from "next/link";


const links = [
    {
        text:"Home",
        href:"/"
    },
    {
        text:"Services",
        href:"/services"
    },
    {
        text:"Marketplace",
        href:"/marketplace"
    },
    {
        text:"Contacts",
        href:"/contacts"
    },
]

function Menu(props) {

    const [activePage, setActivePage] = useState(0)
    return (
        <div className={s.menuWrapper}>
            <div className={s.menuBlock}>
                <div>Logo</div>
                <nav className={s.navbarBlock}>
                    <ul className={s.navbar}>

                        {links.map((link,i) => {
                            return (
                                <li
                                    key={link.text + link.href}
                                    className={activePage === i && s.active}
                                    onClick={() => {
                                        setActivePage(i)
                                    }
                                }
                                >
                                    <Link href={link.href}>{link.text}</Link>
                                </li>
                            )
                        })}

                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Menu;