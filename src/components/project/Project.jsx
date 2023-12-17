import classes from "./styles/Project.module.css";
import {ProjectCaption, ProjectCover, ProjectHeading, ProjectMoreInfo, ProjectTech, ProjectTitle, ScreenshotDisplays} from "./components"
import PreviewContainer from "../preview/PreviewContainer.jsx";
import {useState} from "react";
import Card from "../../ui/Card.jsx";
import { LinkIcon } from "../../ui"
import {AnimatePresence} from "framer-motion";


const Project = ({ title, coverImage, desktopImage, mobileImage, heading, captions, link, github, previews, tech, type }) => {

    const [showPreviews, setShowPreviews] = useState(false)

    return (
        <Card type={type}>
            <div className={classes.container}>
                <div className={classes.head}>
                    <div className={classes.coverTitle}>
                        <ProjectCover coverImage={coverImage} title={title}/>
                        <ProjectTitle title={title}/>
                    </div>
                    <ProjectHeading heading={heading}/>
                </div>
                <div className={classes.body}>
                    <div className={classes.screenshots}>
                        <ScreenshotDisplays desktop={desktopImage} mobile={mobileImage}/>
                    </div>
                    <ProjectCaption captions={captions} />
                    <ProjectTech tech={tech}/>


                    <div className={classes.links}>
                        {previews.length > 0 && <ProjectMoreInfo showPreviews={showPreviews} setShowPreviews={setShowPreviews}/>}
                        <LinkIcon icon="launch" link={link} fontSize="36px"/>
                        <LinkIcon icon="github" link={github} fontSize="36px"/>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {showPreviews && <PreviewContainer previews={previews} />}
            </AnimatePresence>
        </Card>
    );
};

export default Project;