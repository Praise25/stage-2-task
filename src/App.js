import { Route, Switch, Redirect } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/profile" />
      </Route>
      <Route path="/profile">
        <ProfilePage />
      </Route>
    </Switch>
  );
}

export default App;
