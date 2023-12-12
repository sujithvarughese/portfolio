import classes from "./styles/Resume.module.css"
import resume from "../assets/images/resume.png"

const Resume = () => {
	return (
		<div className={classes.container}>
			<img src={resume} alt="resume" className={classes.resume}/>
		</div>
	);
};

export default Resume;