import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import { Link } from 'react-router-dom';
import * as AiIcons from "react-icons/ai";
import { SideBarData } from './SidebarDatas'
import '../../css/Navbar.css';
import { IconContext } from 'react-icons';

function ReviewerNavbar() {
    const [sideBarr, setSideBarr] = useState(false)

    const showSidebar = () => setSideBarr(!sideBarr)
    return (
        <>
            <IconContext.Provider value = {{color: '#fff'}}>
                <div className = "navbar">
                    <Link to = "#" className = "menu-bars">
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                </div>
                <nav className = {sideBarr ? 'nav-menu active' : 'nav-menu'}>
                    <ul className = 'nav-menu-items' onClick = {showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose/>
                            </Link>
                        </li>
                        {SideBarData.map((item,index) => {
                            return (
                                <li key = {index} className = {item.cName}>
                                    <Link to = {item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default ReviewerNavbar;
