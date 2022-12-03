import React from "react";
import profilePicture from "../../assets/images/profile_pic.jpg";

function About() {
    return (
        <section>
            <div className="mainCont ">
                <img src={profilePicture} className="profilePic" style={{ width: "30%"}}alt="Profile Picture" />
                    <div className="contentCont">
                        <h1 id="about">Hi, I am Jay White</h1>
                            <div className="textCont">
                                <p>About me text will go here.</p>
                            </div>
                    </div>
            </div>
        </section>
    );
}

export default About;