import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { styles} from "../styles.js";
import { navLinks} from "../constants/index.js";
import { logo, menu, close } from "../assets";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

    return (
        <nav className={`${styles.paddingX} navbar`}>
            <div className="navbar_elements">
                <Link to="/"
                      className="navbar_link"
                      onClick={() => {
                          setActive("");
                          window.scrollTo(0, 0);
                      }}
                >
                    <img src={logo} alt="logo" className="navbar_logo"/>
                    <p className="navbar_logo_text">Danila <span className="navbar_logo_span">| Developer</span></p>
                </Link>

                <ul className="navbar_menu">
                    {navLinks.map((Link) => (
                        <li
                            key={Link.id}
                            className={`${
                                active === Link.title ? "navbar_menu_active" : "navbar_menu_notactive"
                            }`}
                            onClick={() => setActive(Link.title)}
                        >
                            <a href={`#${Link.id}`}>{Link.title}</a>
                        </li>
                    ))}
                </ul>

                <div className="navbar_hamburger">
                    <img src={toggle ? close : menu} alt="menu" className="navbar_hamburger_picture"
                         onClick={() => setToggle(!toggle)}/>
                    <div className={`${!toggle ? "navbar_hamburger_elements_hidden" 
                        : "navbar_hamburger_elements_active"} navbar_hamburger_elements`}>
                        <ul className="navbar_menu black-gradient">
                            {navLinks.map((Link) => (
                                <li
                                    key={Link.id}
                                    className={`${
                                        active === Link.title ? "navbar_menu_active" : "navbar_menu_notactive"
                                    }`}
                                    onClick={() =>  {
                                        setToggle(!toggle);
                                        setActive(Link.title);
                                    }}
                                >
                                    <a href={`#${Link.id}`}>{Link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar