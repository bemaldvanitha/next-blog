import classes from './ContactForm.module.css';

const ContactForm = (props) => {
    return(
        <section className={classes.contact}>
            <h1>How can i help</h1>

            <form className={classes.form}>

                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor={'email'}>Your Email</label>
                        <input type={'email'} id={'email'} required/>
                    </div>

                    <div className={classes.control}>
                        <label htmlFor={'name'}>Your Name</label>
                        <input type={'text'} id={'name'} required/>
                    </div>
                </div>

                <div className={classes.control}>
                    <label htmlFor={'message'}>Your Message</label>
                    <textarea rows={'5'} id={'message'}>
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