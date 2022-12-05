import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { GiCoffeeCup } from "react-icons/gi";

const Footer = () => {

    return(
        
    <section className="footer">
        <div className="primary flex-row center">
            <div>
                <ul className="flex-row">
                    <li className="footlink">
                        <a href = 'https://github.com/JayWhiteBuffalo'>
                            <h3><AiFillGithub/></h3>
                    </a>
                    </li>
                    <li className="footlink">
                        <a href = 'https://www.linkedin.com/in/jay-white-03b716247/'>
                            <h3><AiFillLinkedin/></h3>
                        </a>
                    </li>
                    <li className="footlink">
                        <a href = 'https://www.buymeacoffee.com/JayWhiteBuq'>
                            <h3><GiCoffeeCup/></h3>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    )
}

export default Footer;