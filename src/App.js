import { Route, Switch } from "react-router-dom";

import Layout from "./components/layouts/Layout";
import FavouritesPage from "./pages/Favourites";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact> {/* exact={true}  finds exact match*/}
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favourites">
          <FavouritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
