import classes from "./styles/Project.module.css";
import {ProjectCaption, ProjectCover, ProjectLinks} from "./"
import ScreenshotDisplay from "../ScreenshotDisplays.jsx";
import {FaAnglesDown, FaAnglesUp} from "react-icons/fa6";
import PreviewContainer from "../preview/PreviewContainer.jsx";
import {useState} from "react";
import Card from "../../ui/Card.jsx";

const Project = ({ title, coverImage, desktopImage, mobileImage, caption, details, link, github, previews }) => {

    const [showPreviews, setShowPreviews] = useState(false)

    return (
        <Card>
            <div className={classes.container}>
                    <ProjectCover coverImage={coverImage} title={title}/>
                <div className={classes.info}>
                    <div className={classes.title}>
                        {title}
                    </div>
                    <ProjectCaption caption={caption} />
                    <ScreenshotDisplay desktop={desktopImage} mobile={mobileImage}/>

                    {
                        (previews.length > 0 && showPreviews) ?
                            <div className={classes.previewsToggle} onClick={()=>setShowPreviews(false)}>
                                <FaAnglesUp /><div>Hide</div>
                            </div>
                            :
                            <div className={classes.previewsToggle} onClick={()=>setShowPreviews(true)}>
                                <FaAnglesDown /><div>More Info</div>
                            </div>
                    }

                    {showPreviews && <PreviewContainer previews={previews} />}
                    <ProjectLinks link={link} github={github} />
                </div>









            </div>
        </Card>
    );
};

export default Project;