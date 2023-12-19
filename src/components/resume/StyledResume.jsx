import classes from "../../pages/styles/Resume.module.css";
import {LinkIcon} from "../../ui/index.js";
import ProfilePic from "../aboutMe/ProfilePic.jsx";

const StyledResume = () => {
    return (
        <div className={classes.content}>
            <div className={classes.header}>
                <div className={classes.info}>
                    <h1 className={classes.name}>Sujith Varughese</h1>
                    <h2 className={classes.title}>Full Stack Software Developer</h2>
                </div>
            </div>

            <div className={classes.profile}>
                <h3 className={classes.heading}>Profile</h3>
                <p>I am a recent computer science graduate looking to utilize my experience
                    in developing full-stack web and mobile apps to solve real-world business
                    problems. My goal is to contribute to a team that creates intuitive and
                    efficient software solutions that ultimately lead to the most satisfying
                    experience for the user.
                </p>
            </div>

            <div className={classes.education}>
                <h3 className={classes.heading}>Education</h3>
                <h4 className={classes.school}>Florida International University</h4>
                <h5 className={classes.degree}>Bachelor's on Computer Science, 2022</h5>
            </div>

            <div className={classes.projects}>
                <h3 className={classes.heading}>Projects</h3>
                <div className={classes.projectsContent}>
                    <div className={classes.project}>
                        <h4 className={classes.projectName}>Realty Solutions</h4>
                        <div className={classes.projectDescription}>
                            <p>MERN stack app for managers of rentals properties to calculate and
                                optimize profits/losses, staying informed with payments, along with
                                messaging functionality between managers and tenants.</p>
                        </div>
                        <div className={classes.projectFeatures}>
                            <h5 className={classes.featuresHeading}>Features</h5>
                            <ul>
                                <li>Seperate user roles (using signed cookies with JSON web tokens)
                                    for managers who have access to all information, and tenants
                                    who have access to only their appropriate unit
                                </li>
                                <li>
                                    Calculate mortgage payments, get live payoff quotes, adjust APR
                                    and compare payments all managed in React state
                                </li>
                                <li>
                                    In mobile version, call or send messages to tenants from the app
                                </li>
                                <li>
                                    Thread-like conversation style messaging
                                </li>
                                <li>
                                    HUD.gov API to get nationwide rental rates by location
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className={classes.project}>
                        <h4 className={classes.projectName}>On the Books</h4>
                        <div className={classes.projectDescription}>
                            <p>Library management MERN app where users can search, get recommendations, and save books found using the OpenLibrary API.
                                Users can then create and save notes into a digital notebook.</p>
                        </div>
                        <div className={classes.projectFeatures}>
                            <h5 className={classes.featuresHeading}>Features</h5>
                            <ul>
                                <li>State management using React Reducer/Context
                                </li>
                                <li>
                                    Protected routing using React Router
                                </li>
                                <li>
                                    HTTP signed cookies & JSON Web Tokens for authorization
                                </li>
                                <li>
                                    MongoDB with mongoose for CRUD operations
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div className={classes.skills}>
                <h3 className={classes.heading}>Skills</h3>
                <ul className={classes.skillList}>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>NodeJS</li>
                    <li>React</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>SQL</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Git Version Control</li>
                </ul>
            </div>


            <div className={classes.experience}>
                <h3 className={classes.heading}>Work Experience</h3>
                <div className={classes.workContent}>
                    <div className={classes.job}>
                        <h4 className={classes.jobTitle}>IT Support Specialist</h4>
                        <h5 className={classes.jobLocation}>University of Florida, Gainesville, FL</h5>
                        <p className={classes.jobDates}>2016-2020</p>
                        <ul className={classes.jobRoles}>
                            <li>Created training presentations
                                during software upgrade cycles
                                showcasing changes and new poten-
                                tial use cases
                            </li>
                            <li>Worked with IT managers and system
                                administrators to solve problems
                            </li>
                            <li>Software testing and maintenance</li>
                        </ul>
                    </div>
                    <div className={classes.job}>
                        <h4 className={classes.jobTitle}>Help Desk Specialist</h4>
                        <h5 className={classes.jobLocation}>University of Florida, Gainesville, FL</h5>
                        <p className={classes.jobDates}>2015-2016</p>
                        <ul className={classes.jobRoles}>
                            <li>First point of contact for account-related issues</li>
                            <li>Led team of students during enrollment periods to manage system registration problems</li>
                        </ul>
                    </div>
                </div>
            </div>



            <div className={classes.porfolioLink}>
                <LinkIcon
                    icon="github"
                    link="https://sujith-varughese-portfolio.netlify.app"
                    label="https://sujith-varughese-portfolio.netlify.app"
                />
            </div>

        </div>
    );
};

export default StyledResume;