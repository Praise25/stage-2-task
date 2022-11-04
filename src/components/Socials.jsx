import classes from "./Socials.module.css";
import slackSvg from "../assets/slack.svg";
import githubSvg from "../assets/github.svg";

const Socials = () => {
  return (
    <div className={classes["socials-icons"]}>
      <img src={slackSvg} alt="" />
      <img src={githubSvg} alt="" />
    </div>
  )
}

export default Socials;