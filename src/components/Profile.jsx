import { Fragment } from "react";
import ProfileHeader from "./ProfileHeader"
import LinkList from "./LinkList";
import Socials from "./Socials";

const Profile = () => {
  return (
    <Fragment>
      <ProfileHeader />
      <LinkList />
      <Socials />
    </Fragment>
  )
}

export default Profile;