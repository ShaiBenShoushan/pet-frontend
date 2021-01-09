import { Grid, makeStyles, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import HomeModal from './HomeModal';
import SignUp from './templates/SignUp';
import SignIn from './templates/SignIn';
import { withRouter, generatePath } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    main: {
        "margin-top": "10rem",
    },
}));
function LoggedOutHomePage(props) {
    const classes = useStyles();
    return (
        <Grid
            className={classes.main}
            container
            spacing={0}
            direction="column"
            alignItems="center"
        >
            <Grid item>
                <h1>Wellcome, to Petville</h1>
            </Grid>
            <Grid item>
                <p>We are all about pet adopting.</p>
            </Grid>
            <Grid item>
                <Link to="/SearchPage">Search Pets</Link>
            </Grid>
            <Box m="1rem">
                <Grid
                    container
                    alignItems="center"
                    justify="center"
                >
                    <Box mr="1rem">
                        <Grid item m={8}>
                            <HomeModal buttonText="Login">
                                <SignIn onSignIn={props.onSignIn} />
                            </HomeModal>
                        </Grid>
                    </Box>
                    <Box ml="1rem">
                        <Grid item>
                            <HomeModal buttonText="Sign Up">
                                <SignUp />
                            </HomeModal>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
        </Grid>
    )
}

export default withRouter(LoggedOutHomePage);