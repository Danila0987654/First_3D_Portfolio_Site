import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { styles} from "../styles.js";
import { navLinks} from "../constants/index.js";
import { logo, menu, close } from "../assets";

const Navbar = () => {
    const [active, setActive] = useState("");

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
            </div>
        </nav>
    )
}

export default Navbar