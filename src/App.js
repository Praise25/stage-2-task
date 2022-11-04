import { Fragment } from "react";
import classes from "./App.module.css";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <Fragment>
      <div className={classes["app-container"]}>
        <Profile />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
