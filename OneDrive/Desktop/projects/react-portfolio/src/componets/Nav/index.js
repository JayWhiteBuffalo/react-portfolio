import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav (props){
    const {pageSelected, setPageSelected} = props;
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
                        <a onClick={() => setPageSelected('About')}>
                            About
                        </a>
                    </li>
                    <li className="mx-2">
                        <a  onClick={() => setPageSelected('Contact')}>
                            Contact
                        </a>
                    </li>
                    <li className="mx-2">
                        <a  onClick={() => setPageSelected('Projects')}>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a 
                        onClick={() => setPageSelected('Resume')}
                        >Resume</a>
                        
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;