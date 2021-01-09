import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, makeStyles, Box } from '@material-ui/core'


function LoginForm(props) {
    console.log(props);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function onLogin(e) {
        e.preventDefault();
        console.log(password, username);
    }

    function onChangeUsername(e) {
        setUsername(e.target.value);
    }
    function onChangePassword(e) {
        setPassword(e.target.value);
    }
    return (

        <Grid
            container
            direction="column"
            alignItems="center"
        >
            <form onSubmit={onLogin}>
                <Grid container
                    direction="row"
                    alignItems="center"
                    justify="space-between"
                >
                    <label>Username</label>
                    <input
                        onChange={onChangeUsername}
                        type="text"
                        value={username}
                    />

                </Grid>
                <Grid container
                    direction="row"
                    alignItems="center"
                    justify="space-between"
                >

                    <label>Password</label>
                    <input
                        onChange={onChangePassword}
                        type="text"
                        value={password}
                    />
                </Grid>
                <Grid container
                    direction="row"
                    alignItems="center"
                    justify="center"
                >

                    <Button variant="contained" color="primary" type="submit">Login</Button>
                </Grid>
            </form>
            {/* {props.signUp && <Button variant="contained" color="primary"><Link to="/SignUp">Sign Up</Link></Button>} */}
        </Grid>
    )
}

export default LoginForm;