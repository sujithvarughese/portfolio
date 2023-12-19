import classes from "./styles/Resume.module.css"
import resume from "../assets/images/resume.png"
import {ButtonPlain, LinkIcon} from "../ui/index.js";
import { StyledResume } from "../components"
import {useEffect, useState} from "react";
const Resume = () => {

	const [showPrintableResume, setShowPrintableResume] = useState(false)
	// scroll to top on load
	useEffect(() => {
		window.scrollTo(0, 0)
	}, []);
	return (
		<div className={classes.container}>

			<ButtonPlain
				className={classes.viewPritableText}
				onClick={()=>setShowPrintableResume(!showPrintableResume)}
			>
				{showPrintableResume ? "Hide Printable Resume" : "Show Printable Resume"}
			</ButtonPlain>

			{showPrintableResume ? <img src={resume} alt="resume" className={classes.resume}/> : <StyledResume />}



		</div>
	);
};

export default Resume;