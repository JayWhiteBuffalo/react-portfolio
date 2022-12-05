import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact () {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!errorMessage) {
            setFormState({ [e.target.name]: e.target.value});
        }
    };


    const handleChange = (e) =>{
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if(!isValid){
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
            }
        };
    


    return(
        <div className="formCont">
        <section >
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <div id="contanctMessage">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button className="button" type="submit">Submit</button>
            </form>
        </section>
        <section>
                    <div id="moonmandiv">
                        <img
                         src={require(`../../assets/images/moonman.png`)}
                         alt="Moon - Man in meditation"
                        className = "moonman floating mx-1"
                        key="MoonMan"/>
                    </div>
        </section>
    </div>
    )
}

export default Contact;