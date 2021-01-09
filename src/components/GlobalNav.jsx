import { Grid, Button } from "@material-ui/core";
import { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import auth from '../lib/auth';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "#212121",
        color: "blueviolet",
    },
    item: {
        margin: theme.spacing(1),
    },
}));
function GlobalNav(props) {
    const classes = useStyles();
    const context = useContext(UserContext);
    const { _id, isAdmin } = context.user;

    function onLogout(e) {
        auth.logout(() => {
            props.history.push("/");
        })
    }
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.container}
        >

            <Grid item>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.item}
                    >
                    <Link to={`/${_id}/SearchPage`}>Search Pets</Link>
                </Button>
                <Button 
                variant="contained"
                 color="primary"
                 className={classes.item}
                 >
                    <Link to={`/${_id}/MyPets`}>My Pets</Link>
                </Button>
                <Button 
                variant="contained"
                color="primary"
                className={classes.item}
                >
                    <Link to={`/${_id}/ProfilePage`}>Profile Settings</Link>
                </Button>
                {
                    isAdmin
                    &&
                    <Button
                    variant="contained" 
                    color="primary"
                    className={classes.item}
                    >
                        <Link to={`/${_id}/AdminDash`}>Admin Dashboard</Link>
                    </Button>
                }
                {
                    isAdmin
                    &&
                    <Button 
                    variant="contained"
                    color="primary"
                    className={classes.item}
                    >
                        <Link to={`/${_id}/AdminForm`}>Admin Form</Link>
                    </Button>
                }
                <Button
                variant="contained" 
                color="primary" 
                onClick={onLogout}
                className={classes.item}
                >
                    Logout
                </Button>
            </Grid>
        </Grid>
    )
}

export default withRouter(GlobalNav);