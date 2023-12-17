import classes from "./styles/Header.module.css";
import ProfilePic from "./ProfilePic.jsx";
import { motion } from "framer-motion"
const Header = () => {
    return (
        <div className={classes.container}>
            <motion.div className={classes.greeting}
                initial={{ scale: 0.6 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{type: "spring"}}
            >
                <p className={classes.hello}>
                    Hello, I'm
                </p>
                <p className={classes.name}>
                    Sujith Varughese
                </p>
                <p className={classes.title}>
                    Software Developer
                </p>
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