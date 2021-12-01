import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9a1tzx8', 'template_9hjqlwl', form.current, 'user_d55RZNmmbHaLkJwKCLwAy')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <br />
            <input type="text" name="user_name" />
            <br />
            <br />
            <label>Email</label>
            <br />
            <input type="email" name="user_email" />
            <br />
            <br />
            <label>Message</label>
            <br />
            <textarea name="message" />
            <br />
            <br />
            <input type="submit" value="Send" />
        </form>
    );
};

export default Contact;