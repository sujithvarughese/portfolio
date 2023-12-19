import classes from "./styles/ProjectPreview.module.css";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6";
import ProjectPreview from "./ProjectPreview.jsx";
import { motion } from "framer-motion"
import {useRef, useState} from "react";
import {ButtonIcon} from "../../ui/index.js";
const PreviewContainer = ({ previews }) => {

    const elementRef = useRef(null)
    const handleHorizantalScroll = (element, speed, distance, step) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            element.scrollLeft += step;
            scrollAmount += Math.abs(step);
            if (scrollAmount >= distance) {
                clearInterval(slideTimer);
            }
        }, speed);
    };


    return (
        <motion.div className={classes.container}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{y: -100, opacity: 0 }}
        >
            <div className={classes.scroll}>
                <ButtonIcon onClick={()=>handleHorizantalScroll(elementRef.current, 25, 100, -10)}>
                    <FaAngleLeft />
                </ButtonIcon>
            </div>

            <div className={classes.content} ref={elementRef}>
                {previews?.map((preview, index) => <ProjectPreview key={index} preview={preview} />)}
            </div>

            <div className={classes.scroll}>
                <ButtonIcon onClick={()=>handleHorizantalScroll(elementRef.current, 25, 100, 10)}>
                    <FaAngleRight />
                </ButtonIcon>

            </div>
        </motion.div>
    );
};

export default PreviewContainer;