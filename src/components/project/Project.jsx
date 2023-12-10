import classes from "./styles/Project.module.css";
import {ProjectCaption, ProjectCover, ProjectMoreInfo, ProjectTitle} from "./"
import ScreenshotDisplay from "./ScreenshotDisplays.jsx";
import PreviewContainer from "../preview/PreviewContainer.jsx";
import {useState} from "react";
import Card from "../../ui/Card.jsx";
import {GithubIcon, LaunchIcon} from "../../icons/Icons.jsx";


const Project = ({ title, coverImage, desktopImage, mobileImage, caption, details, link, github, previews }) => {

    const [showPreviews, setShowPreviews] = useState(false)

    return (
        <Card>
            <div className={classes.container}>
                <div className={classes.coverTitle}>
                    <ProjectCover coverImage={coverImage} title={title}/>
                    <ProjectTitle title={title}/>
                </div>

                <ProjectCaption caption={caption} />

                <div className={classes.screenshotsLinks}>
                    <div className={classes.screenshots}>
                        <ScreenshotDisplay desktop={desktopImage} mobile={mobileImage}/>
                        {previews.length > 0 && <ProjectMoreInfo showPreviews={showPreviews} setShowPreviews={setShowPreviews}/>}
                    </div>
                    <div>
                        <LaunchIcon link={link}/>
                        <GithubIcon link={github}/>
                    </div>

                </div>
            </div>


            {showPreviews && <PreviewContainer previews={previews} />}

        </Card>
    );
};

export default Project;