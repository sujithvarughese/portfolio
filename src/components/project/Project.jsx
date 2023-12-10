import classes from "./styles/Project.module.css";
import {ProjectCaption, ProjectCover, ProjectMoreInfo, ProjectTech, ProjectTitle} from "./"
import ScreenshotDisplay from "./ScreenshotDisplays.jsx";
import PreviewContainer from "../preview/PreviewContainer.jsx";
import {useState} from "react";
import Card from "../../ui/Card.jsx";
import {GithubIcon, LaunchIcon} from "../../icons/Icons.jsx";


const Project = ({ title, coverImage, desktopImage, mobileImage, captions, details, link, github, previews, tech, type }) => {

    const [showPreviews, setShowPreviews] = useState(false)

    return (
        <Card type={type}>
            <div className={classes.container}>
                <div className={classes.coverTitle}>
                    <ProjectCover coverImage={coverImage} title={title}/>
                    <ProjectTitle title={title}/>
                </div>

                <ProjectCaption captions={captions} />

                <div className={classes.screenshotsTech}>
                    <ScreenshotDisplay desktop={desktopImage} mobile={mobileImage}/>
                    <ProjectTech tech={tech}/>
                </div>

                <div className={classes.links}>
                    {previews.length > 0 && <ProjectMoreInfo showPreviews={showPreviews} setShowPreviews={setShowPreviews}/>}
                    <LaunchIcon link={link} size="36px"/>
                    <GithubIcon link={github} size="36px"/>
                </div>


                {showPreviews && <PreviewContainer previews={previews} />}

            </div>
        </Card>
    );
};

export default Project;