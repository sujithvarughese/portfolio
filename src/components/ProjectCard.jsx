import classes from "./styles/ProjectCard.module.css";
import ScreenshotDisplay from "./ScreenshotDisplays.jsx"
import iconX from "../assets/images/x_icon.svg"
import {useState} from "react";
import RealtySolutionsPreview from "./RealtySolutionsPreview.jsx";
import ProjectPreview from "./ProjectPreview.jsx";
const ProjectCard = ({ title, coverImage, desktopImage, mobileImage, caption, details, link, github, previews }) => {

	const [showExtended, setShowExtended] = useState(false)

	return (
		<div className={classes.container}>
			{
				showExtended && <RealtySolutionsPreview />
			}
			<div className={classes.content}>

				<div className={classes.card}>
					<div className={classes.coverImage}>
						<img src={coverImage} alt={title}/>
						{
							title === "Realty Solutions" &&
							<div onClick={()=>setShowExtended(!showExtended)}>
								More Info
							</div>
						}
					</div>

					<div className={classes.info}>
						<div className={classes.title}>
							{title}
						</div>
						<div className={classes.caption}>
							{caption}
						</div>
						<div className={classes.details}>
							{details}
						</div>
						<div className={classes.links}>
							<div className={classes.preview}>
								<a href={link}>Preview App</a>
							</div>
							<div className={classes.github}>
								<a href={github}>GitHub Link</a>
							</div>
						</div>
					</div>

					<div className={classes.screenshotDisplay}>
						<ScreenshotDisplay desktop={desktopImage} mobile={mobileImage}/>
					</div>
				</div>

				{ previews?.length > 0 && <ProjectPreview previews={previews} />}

			</div>
		</div>
	);
};

export default ProjectCard;