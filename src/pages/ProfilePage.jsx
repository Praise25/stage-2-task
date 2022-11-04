import Boilerplate from "../components/Layout/Boilerplate";
import ProfileHeader from "../components/Profile/ProfileHeader";
import LinkList from "../components/Profile/LinkList";
import Socials from "../components/Profile/Socials";

const ProfilePage = () => {
  return (
    <Boilerplate>
      <ProfileHeader />
      <LinkList />
      <Socials />
    </Boilerplate>
  )
}

export default ProfilePage;