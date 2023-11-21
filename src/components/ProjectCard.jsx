import classes from "./styles/ProjectCard.module.css";
import ScreenshotDisplay from "./ScreenshotDisplays.jsx"
import {useState} from "react";
import ProjectPreview from "./ProjectPreview.jsx";
import {FaAnglesDown, FaAnglesUp} from "react-icons/fa6";

const ProjectCard = ({ title, coverImage, desktopImage, mobileImage, caption, details, link, github, previews }) => {

	const [showPreviews, setShowPreviews] = useState(false)

	return (
		<div className={classes.container}>
			<div className={classes.content}>

				<div className={classes.card}>
					<div className={classes.coverImage}>
						<img src={coverImage} alt={title}/>
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
			</div>

			{ showPreviews &&
				<div className={classes.previews}>
					<ProjectPreview previews={previews} />
				</div>
			}

		</div>
	);
};

export default ProjectCard;