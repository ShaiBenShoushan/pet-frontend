

import { Grid } from "@material-ui/core";
import { useContext } from "react";
import { withRouter } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import GlobalNav from "./GlobalNav";
function LoggedInHomePage(props) {
    const context = useContext(UserContext);
    const { firstName, lastName } = context.user;
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
            <GlobalNav/>
        </Grid>
    )
}

export default withRouter(LoggedInHomePage);