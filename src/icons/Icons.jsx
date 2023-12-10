import {IoLogoGithub, IoLogoJavascript, IoLogoReact, IoRocketSharp} from "react-icons/io5";
import {FaNode} from "react-icons/fa";
import {TiHtml5} from "react-icons/ti";
import {SiCsswizardry} from "react-icons/si";
import {FaSquareGit} from "react-icons/fa6";

const LaunchIcon = ({ link }) => <a href={link} target="_blank" rel="noreferrer"><IoRocketSharp /></a>;
const GithubIcon = ({ link }) => <a href={link} target="_blank" rel="noreferrer"><IoLogoGithub /></a>

const JavascriptIcon = () => <IoLogoJavascript />
const ReactIcon = () => <IoLogoReact />
const NodeIcon = () => <FaNode />
const HtmlIcon = () => <TiHtml5 />
const CssIcon = () => <SiCsswizardry />
const GitIcon = () => <FaSquareGit />

export { LaunchIcon, GithubIcon, JavascriptIcon, ReactIcon, NodeIcon, HtmlIcon };