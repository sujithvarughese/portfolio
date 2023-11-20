import classes from "./styles/ProjectCard.module.css";
import img1 from "../assets/images/propertyasssitant/units.png"

const ProjectCard = ({ title, cover, caption, details, link, github }) => {
	return (
		<div className={classes.container}>
			<div className={classes.content}>
				<div className={classes.card}>

					<img src={img1} alt="" className={classes.image}/>
				</div>

			</div>
		</div>
	);
};

export default ProjectCard;