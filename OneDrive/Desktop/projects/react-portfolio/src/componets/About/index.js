import React from "react";
import profilePicture from "../../assets/images/Profile_Thumb.png";

function About() {
    return (
    <div>
        <section>
            <div className="mainCont ">
                <img src={profilePicture} className="profilePic" style={{ width: "30%"}}alt="Profile" />
                    <div className="aboutContentCont">
                        <h1 id="about">Hi, I am Jay White</h1>
                            <div className="textCont">
                                <p>I recognize individual skills, talents, and personalities and believe a diverse team can work in synergy to produce the best outcome. My passions include making connections, finding solutions, and adding value to organizations that create products or services.</p>
                            </div>
                    </div>
            </div>
        </section>
    </div>
    );
}

export default About;