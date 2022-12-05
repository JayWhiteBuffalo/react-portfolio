import React from "react";

function Nav (props){
    const {pageSelected, setPageSelected} = props;
    return (
        <header className="flex-row px-1">
            <h2> 
                <a href="/">
                    <span>Jay</span>White
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2 headerlink">
                        <a onClick={() => setPageSelected('About')}>
                            About
                        </a>
                    </li>
                    <li className="mx-2 headerlink">
                        <a  onClick={() => setPageSelected('Projects')}>
                            Projects
                        </a>
                    </li>
                    <li className="mx-2 headerlink">
                        <a  onClick={() => setPageSelected('Contact')}>
                            Contact
                        </a>
                    </li>
                    <li className="mx-2 headerlink">
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