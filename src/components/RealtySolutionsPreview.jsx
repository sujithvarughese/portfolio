import classes from "./styles/RealtySolutionsPreview.module.css";
import fmrIMG from "../assets/images/propertyasssitant/fmr.png"
import messagesIMG from "../assets/images/propertyasssitant/messages.png"
import serviceIMG from "../assets/images/propertyasssitant/service.png"
import unitsIMG from "../assets/images/propertyasssitant/units.png"
import searchIMG from "../assets/images/propertyasssitant/search.png"
import property from "../assets/images/property-cover.jpeg"
import Modal from "../UI/Modal.jsx";

const link = 'https://prop-management-assistant.netlify.app'
const github = 'https://github.com/sujithvarughese/property-management-app'

const RealtySolutionsPreview = () => {
	return (
		<Modal>
		<div className={classes.container}>
			<div className={classes.content}>

				<div className={classes.section}>
					<div className="">
						<p className={classes.caption}>All your properties.</p>
						<p className={classes.caption}>All in one place.</p>
					</div>
					<img className={classes.preview} src={unitsIMG} alt="units"/>
				</div>

				<div className={classes.section}>
					<img className={classes.preview} src={messagesIMG} alt="messages"/>
					<div className="">
						<p className={classes.caption}>Exchange messages.</p>
						<p className={classes.caption}>Flag important conversations.</p>
					</div>
				</div>

				<div className={classes.section}>
					<div className="">
						<p className={classes.caption}>Get market rents anywhere in the US.</p>
					</div>
					<img className={classes.preview} src={fmrIMG} alt="units"/>
				</div>

				<div className={classes.section}>
					<img className={classes.preview} src={searchIMG} alt="messages"/>
					<div className="">
						<p className={classes.caption}>Search to easily find and organize properties.</p>
					</div>
				</div>

				<div className={classes.section}>
					<div className="">
						<p className={classes.caption}>Tenants can report issues anytime.</p>
					</div>
					<img className={classes.preview} src={serviceIMG} alt="units"/>
				</div>
			</div>
		</div>
		</Modal>
	);
};

export default RealtySolutionsPreview;