import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav (props){
    const {contactSelected, setContactSelected} = props;
    return (
        <header className="flex-row px-1">
            <h2> 
                <a href="/">
                    Jay White
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" onClick={() => setContactSelected('About')}>
                            About
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#contact" onClick={() => setContactSelected('Contact')}>
                            Contact
                        </a>
                    </li>
                    <li className="mx-2">
                        <a href="#projects" onClick={() => setContactSelected('Projects')}>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a 
                        href="#resume"
                        >Resume</a>
                        
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;