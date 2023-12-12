import classes from "./styles/Header.module.css"
const Bio = () => {


    return (
        <div className={classes.container}>
            <div className={classes.name}>
                Sujith Varughese
            </div>
            <div className={classes.title}>
                Software Developer
            </div>
            <div className={classes.bio}>
                <p>
                    Hello! I'm Sujith. I graduated in December 2022 with a Bachelor's in Computer Science.
                    Since graduating, I have been tuning my full-stack development skills through bootcamps and personal projects.
                    Check out my resume and portfolio to view some projects!
                </p>
            </div>
        </div>
    );
};

export default Bio;