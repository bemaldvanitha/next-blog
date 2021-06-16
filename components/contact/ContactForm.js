import { useState } from 'react';

import classes from './ContactForm.module.css';

const ContactForm = (props) => {
    const [enteredEmail,setEnteredEmail] = useState('');
    const [enteredName,setEnteredName] = useState('');
    const [enteredMessage,setEnteredMessage] = useState('');

    const sendMessageHandler = async (e) => {
        e.preventDefault();

        await fetch('/api/contact',{
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    return(
        <section className={classes.contact}>
            <h1>How can i help</h1>

            <form className={classes.form} onSubmit={sendMessageHandler}>

                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor={'email'}>Your Email</label>
                        <input type={'email'} id={'email'} required value={enteredEmail}
                               onChange={(e) => setEnteredEmail(e.target.value)}/>
                    </div>

                    <div className={classes.control}>
                        <label htmlFor={'name'}>Your Name</label>
                        <input type={'text'} id={'name'} required value={enteredName}
                            onChange={(e) => setEnteredName(e.target.value)}/>
                    </div>
                </div>

                <div className={classes.control}>
                    <label htmlFor={'message'}>Your Message</label>
                    <textarea rows={'5'} id={'message'} value={enteredMessage} required
                        onChange={(e) => setEnteredMessage(e.target.value)}>
                    </textarea>
                </div>

                <idv className={classes.actions}>
                    <button>Send Message</button>
                </idv>

            </form>

        </section>
    )
}

export default ContactForm;