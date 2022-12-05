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
                        <a  onClick={() => setPageSelected('About')}
                            className={pageSelected === "About" ? "navActive" : "nav-link"}
                            >About
                        </a>
                    </li>
                    <li className="mx-2 headerlink">
                        <a  onClick={() => setPageSelected('Projects')}
                            className={pageSelected === "Projects" ? "navActive" : "nav-link"}
                            >Projects
                        </a>
                    </li>
                    <li className="mx-2 headerlink">
                        <a  onClick={() => setPageSelected('Contact')}
                            className={pageSelected === "Contact" ? "navActive" : "nav-link"}
                            >Contact
                        </a>
                    </li>
                    <li className="mx-2 headerlink">
                        <a 
                        onClick={() => setPageSelected('Resume')}
                        className={pageSelected === "Resume" ? "navActive" : "nav-link"}
                        >Resume</a>
                        
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;