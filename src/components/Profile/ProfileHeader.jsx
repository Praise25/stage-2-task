import profilePicDefault from "../../assets/profile-pic-default.png";
import shareButtonDefault from "../../assets/share-button-default.png";
import classes from "./ProfileHeader.module.css";
  
const ProfileHeader = () => {
  return (
    <div className={classes["profile-header"]}>
      <div className={classes["share-button"]}>
        <img src={shareButtonDefault} alt="share button" />
      </div>
      <div className={`${classes["profile-header-content"]}`}>
        <img src={profilePicDefault} id="profile__img" alt="profile pic" />
        <p id="twitter">Praise</p>
        <p id="slack" hidden>Praise</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
