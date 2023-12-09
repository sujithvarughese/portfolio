import classes from "./styles/RealtySolutionsPreview.module.css";
import fmrIMG from "../assets/images/propertyasssitant/fmr.png"
import messagesIMG from "../assets/images/propertyasssitant/messages.png"
import serviceIMG from "../assets/images/propertyasssitant/service.png"
import unitsIMG from "../assets/images/propertyasssitant/units.png"
import searchIMG from "../assets/images/propertyasssitant/search.png"

const link = 'https://prop-management-assistant.netlify.app'
const github = 'https://github.com/sujithvarughese/property-management-app'

const RealtySolutionsPreview = () => {
	return (

		<div className={classes.container}>
			<div className={classes.content}>

				<div className={classes.section}>
					<img className={classes.image} src={unitsIMG} alt="units"/>
					<div className={classes.caption}>
						<p className={classes.text}>All your properties.</p>
						<p className={classes.text}>All in one place.</p>
					</div>
				</div>

				<div className={classes.section}>
					<img className={classes.image} src={messagesIMG} alt="messages"/>
					<div className={classes.caption}>
						<p className={classes.text}>Exchange messages.</p>
						<p className={classes.text}>Flag important conversations.</p>
					</div>
				</div>

				<div className={classes.section}>
					<img className={classes.image} src={fmrIMG} alt="units"/>
					<div className={classes.caption}>
						<p className={classes.text}>Get market rents anywhere in the US.</p>
					</div>
				</div>

				<div className={classes.section}>
					<img className={classes.image} src={searchIMG} alt="messages"/>
					<div className={classes.caption}>
						<p className={classes.text}>Search to easily find and organize properties.</p>
					</div>
				</div>

				<div className={classes.section}>
					<img className={classes.image} src={serviceIMG} alt="units"/>
					<div className={classes.caption}>
						<p className={classes.text}>Tenants can report issues anytime.</p>
					</div>
				</div>

			</div>
		</div>

	);
};

export default RealtySolutionsPreview;