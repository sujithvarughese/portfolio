import classes from "./styles/Header.module.css";
import ProfilePic from "./ProfilePic.jsx";
import { motion } from "framer-motion"
import graphicCenter from "../../assets/images/graphic-center.png"
const Header = () => {
    return (
        <div className={classes.container}>
            <motion.div className={classes.greeting}
                initial={{ scale: 0.6 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{type: "spring"}}
            >
                <div className={classes.line1}>
                    <p className={classes.hello}>Hello! </p>
                    <p className={classes.im}>I'm</p>
                </div>

                <h5 className={classes.name}>Sujith Varughese</h5>
                <p className={classes.title}>
                    Software Developer
                </p>
                <img src={graphicCenter} alt="gaphic-center" className={classes.graphicCenter}/>
            </motion.div>
            <motion.div
                className={classes.pic}
                initial={{ scale: 0.6 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{type: "spring"}}
            >
            <ProfilePic />
            </motion.div>

        </div>
    );
};

export default Header;