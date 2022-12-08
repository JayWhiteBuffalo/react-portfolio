import React from "react";
import profilePicture from "../../assets/images/SCAvatar_thumb.png";
import Type from "./Type";

function About() {
    return (
    <div>
        <section className="mainCont">
        <div className="aboutContentCont">
            <div>
                <h1 className="about">Hi There!</h1>
            </div>
            <div>
                <h1 className="about">I'm <span className="blue">Jay</span> <span className="white">White</span></h1>
            </div>
            <div id="type">
                <Type/>
            </div>
        </div>
        <div>
            <img src={profilePicture} className="profilePic" style={{ width: "30%"}}alt="Profile" />
        </div>
        </section>
    </div>
    );
}

export default About;