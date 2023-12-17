import classes from "./styles/ProjectPreview.module.css";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6";
import ProjectPreview from "./ProjectPreview.jsx";
import { motion } from "framer-motion"
const PreviewContainer = ({ previews }) => {
    return (
        <motion.div className={classes.container}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{y: -100, opacity: 0 }}
        >
            <div className={classes.scroll}>
                <FaAngleLeft />
            </div>

            <div className={classes.content}>
                {previews?.map((preview, index) => <ProjectPreview key={index} preview={preview} />)}
            </div>

            <div className={classes.scroll}>
                <FaAngleRight />
            </div>
        </motion.div>
    );
};

export default PreviewContainer;