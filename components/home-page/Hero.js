import Image from "next/image";

import classes from './Hero.module.css';

const Hero = ()  => {
    return (
        <section className={classes.hero}>
            
            <div className={classes.image}>
                <Image src={'/images/site/bemal.jpg'}
                       width={400} height={400} alt={'bemal'}/>
            </div>
            
            <h1>Hi I'm bemal</h1>
            <p>I blog about web dev , mobile dev, game dev and machine learning</p>
            
        </section>
    )
}

export default Hero;