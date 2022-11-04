import zuriSvg from "../../assets/zuri-internship.svg";
import i4gSvg from "../../assets/I4G.svg";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <img src={zuriSvg} alt="Zuri Internship" />
      <p>HNG Internship 9 Frontend Task</p>
      <img src={i4gSvg} alt="Ingressive For Good" />
    </footer>
  )
}

export default Footer;