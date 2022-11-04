import { Route, Switch, Redirect } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/profile" />
      </Route>
      <Route path="/profile">
        <ProfilePage />
      </Route>
      <Route path="/contact">
        <ContactPage />
      </Route>
    </Switch>
  );
}

export default App;
