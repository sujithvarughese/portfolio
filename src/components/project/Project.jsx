import classes from "./styles/Project.module.css";
import {ProjectCaption, ProjectCover, ProjectLinks} from "./"
import ScreenshotDisplay from "../ScreenshotDisplays.jsx";
import {FaAnglesDown, FaAnglesUp} from "react-icons/fa6";
import PreviewContainer from "../preview/PreviewContainer.jsx";
import {useState} from "react";

const Project = ({ title, coverImage, desktopImage, mobileImage, caption, details, link, github, previews }) => {

    const [showPreviews, setShowPreviews] = useState(false)

    return (
        <div className={classes.container}>
            <ProjectCover coverImage={coverImage} title={title}/>
            <div className={classes.title}>
                {title}
            </div>
            <ProjectCaption caption={caption} />
            <ProjectLinks link={link} github={github} />

            <div className={classes.screenshotDisplay}>
                <ScreenshotDisplay desktop={desktopImage} mobile={mobileImage}/>
            </div>

            { previews?.length > 0 &&
                <div>
                    {
                        showPreviews ?
                            <div className={classes.previewsToggle}onClick={()=>setShowPreviews(false)}>
                                <FaAnglesUp /><div>Hide</div>
                            </div>
                            :
                            <div className={classes.previewsToggle}onClick={()=>setShowPreviews(true)}>
                                <FaAnglesDown /><div>More Info</div>
                            </div>
                    }
                </div>
            }

            { showPreviews &&
                <div className={classes.previews}>
                    <PreviewContainer previews={previews} />
                </div>
            }
        </div>
    );
};

export default Project;