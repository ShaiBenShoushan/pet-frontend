

import { Grid, Button } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import GlobalNav from "./GlobalNav";
function LoggedInHomePage(props) {
    const context = useContext(UserContext);
    const { _id, firstName, lastName, isAdmin } = context.user;
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            justify="center"
            alignItems="center"
        >

            <Grid item>
                <h1>Welcome, {firstName} {lastName}</h1>
            </Grid>
            {/* <Grid item>
                <Button variant="contained" color="primary">
                    <Link to={`/${_id}/SearchPage`}>Search Pets</Link>
                </Button>
                <Button variant="contained" color="primary">
                    <Link to={`/${_id}/MyPets`}>My Pets</Link>
                </Button>
                <Button variant="contained" color="primary">
                    <Link to={`/${_id}/ProfilePage`}>Profile Settings</Link>
                </Button>
                {
                    isAdmin
                    &&
                    <Button variant="contained" color="primary">
                        <Link to={`/${_id}/AdminDash`}>Admin Dashboard</Link>
                    </Button>
                }
                {
                    isAdmin
                    &&
                    <Button variant="contained" color="primary">
                        <Link to={`/${_id}/AdminForm`}>Admin Form</Link>
                    </Button>
                }
            </Grid> */}
            <GlobalNav/>
        </Grid>
    )
}

export default withRouter(LoggedInHomePage);