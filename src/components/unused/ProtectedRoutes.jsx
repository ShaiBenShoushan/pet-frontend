

// import SignUp from './components/unused/SignUp';
import { BrowserRouter as Router, Route, Switch, withRouter, generatePath } from 'react-router-dom';
import SearchPage from '../search/SearchPage';
import MyPets from '../pet/MyPets';
import LoggedInHomePage from '../LoggedInHome';
import ProfilePage from '../ProfilePage';
import PetPage from '../pet/PetPage';
import PetCard from '../pet/PetCard';
import AdminDash from "../admin/AdminDash";
import AdminForm from "../admin/AdminForm";
import { createContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { useState } from 'react';
import UserPage from '../admin/user/UserPage';





export default function ProtectedRoutes(props) {
    // console.log(props);
    // props.history.push(`/loggedIn/${props.user._id}`);
    // props.history.replace({
    //     pathname: generatePath("/:id", { id: data.data._id })
    // });
    return (


        // <UserContext.Provider value={props.user}>
            <Router>
                <Switch>
                    {/* <Route exact path="/loggedIn/:id">
                        <LoggedInHomePage id={props.user._id} />
                    </Route>
                    <Route exact path="loggedIn/:id/MyPets/:petId">
                        <PetPage logged={true} />
                    </Route>
                    <Route exact path="loggedIn/:id/MyPets">
                        <ProtectedTry />
                    </Route> */}
                    {/* <Route path="/:id/ProfilePage">
                        <ProfilePage />
                    </Route>
                    <Route path="/:id/SearchPage">
                        <SearchPage />
                    </Route> */}
                    <Route path="/SearchPage">
                        <SearchPage />
                    </Route>
                    admin Routes
                    {/* <Route path="/:id/AdminDash/:userId">
                        <UserPage />
                    </Route>
                    <Route path="/:id/AdminDash/:petId">
                        <AdminForm edit={true} />
                    </Route>
                    <Route path="/:id/AdminDash">
                        <AdminDash />
                    </Route>
                    <Route path="/:id/AdminForm">
                        <AdminForm />
                    </Route> */}
                    <Route path="/PetPage/id">
                        <PetPage />
                    </Route>

                </Switch>
            </Router>
        // </UserContext.Provider>

    )
}
