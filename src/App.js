
import './App.css';
import LoggedOutHomePage from './components/LoggedOutHome';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import SearchPage from './components/search/SearchPage';
import MyPets from './components/pet/MyPets';
import LoggedInHomePage from './components/LoggedInHome';
import ProfilePage from './components/ProfilePage';
import PetPage from './components/pet/PetPage';
import AdminDash from "./components/admin/AdminDash";
import AdminForm from "./components/admin/AdminForm";
import { UserContext } from './context/UserContext';
import { useState } from 'react';
import UserPage from './components/admin/user/UserPage';
import ProtectedRoute from './components/ProtectedRoute';
import auth from './lib/auth';

function App(props) {
  const [userInfo, setUserInfo] = useState({});
  function onSignIn(data) {
    if (data.token) {
      setUserInfo(data.matchedUser);
      auth.login(() => {
        props.history.push(`${data.matchedUser._id}`);
      });
    }
  }
  return (

    <Switch>
      <Route exact path="/SearchPage/:petId">
        <PetPage />
      </Route>
      <Route exact path="/SearchPage">
        <SearchPage />
      </Route>
      <Route exact path="/">
        <LoggedOutHomePage onSignIn={onSignIn} />
      </Route>
      <UserContext.Provider value={{ user: userInfo }}>
        <ProtectedRoute
          exact
          path="/:id"
          component={LoggedInHomePage}
          user={userInfo}
        />
        <ProtectedRoute
          exact
          path="/:id/MyPets/:petId"
          component={PetPage}
          user={userInfo}
        />
                <ProtectedRoute
          exact
          path="/:id/SearchPage/:petId"
          component={PetPage}
          user={userInfo}
        />
        <ProtectedRoute
          exact
          path="/:id/MyPets"
          component={MyPets}
          user={userInfo}
        />
        <ProtectedRoute
          exact
          path="/:id/ProfilePage"
          component={ProfilePage}
          user={userInfo}
        />
        <ProtectedRoute
          exact
          path="/:id/SearchPage"
          component={SearchPage}
          user={userInfo}
          loggedIn={true}
        />

        {/* admin routs */}
        <ProtectedRoute
          exact
          path="/:id/AdminDash/:userId"
          component={UserPage}
        // user={userInfo}
        />

        <ProtectedRoute
          exact
          path="/:id/AdminDash/pet/:petId"
          component={AdminForm}
          user={userInfo}
        />
        <ProtectedRoute
          exact
          path="/:id/AdminDash"
          component={AdminDash}
          user={userInfo}
        />
        <ProtectedRoute
          exact
          path="/:id/AdminForm"
          component={AdminForm}
          user={userInfo}
        />
      </UserContext.Provider>

    </Switch>

  );
}

export default withRouter(App);

