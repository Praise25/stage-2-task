import { Fragment } from "react";
import classes from "./Boilerplate.module.css";
import Footer from "./Footer";

const Boilerplate = (props) => {
  <Fragment>
    <div className={classes["app-container"]}>
      {props.children}
    </div>
    <Footer />
  </Fragment>;
};

export default Boilerplate;
