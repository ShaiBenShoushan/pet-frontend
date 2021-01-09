import { useState } from 'react';
// import HomeModal from './HomeModal';
import { Button } from '@material-ui/core'
import { Grid, makeStyles, Box } from '@material-ui/core';

function SignUp(props) {
    console.log(props);
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVerif, setPasswordVerif] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [bio, setBio] = useState('');

    let signUpSuccess = true;

    function onLogin(e) {
        e.preventDefault();
        console.log(email, password, passwordVerif, firstName, lastName, phoneNum);
    }

    function onChangeEmail(e) {
        setEmail(e.target.value);
    }
    function onChangeFirstName(e) {
        setFirstName(e.target.value);
    }
    function onChangeLastName(e) {
        setLastName(e.target.value);
    }
    function onChangePassword(e) {
        setPassword(e.target.value);
    }
    function onChangePasswordVerif(e) {
        setPasswordVerif(e.target.value);
    }
    function onChangePhoneNumber(e) {
        setPhoneNum(e.target.value);
    }
    function onChangeBio(e) {
        setBio(e.target.value);
    }
    return (
        <Grid
            container
            direction="column"
            alignItems="center"
        >
            <form onSubmit={onLogin}>
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="space-between"

                >

                    <label>Email</label>
                    <input
                        onChange={onChangeEmail}
                        type="text"
                        value={email}
                    />
                </Grid>
                <Grid container
                    direction="row"
                    alignItems="center"
                    justify="space-between"
                >

                    <label>First Name</label>
                    <input
                        onChange={onChangeFirstName}
                        type="text"
                        value={firstName}
                    />
                </Grid>
                <Grid container
                    direction="row"
                    alignItems="center"
                    justify="space-between"
                >

                    <label>Last Name</label>
                    <input
                        onChange={onChangeLastName}
                        type="text"
                        value={lastName}
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
                    justify="space-between"
                >

                    <label>Verify Password</label>
                    <input
                        onChange={onChangePasswordVerif}
                        type="text"
                        value={passwordVerif}
                    />
                </Grid>
                <Grid container
                    direction="row"
                    alignItems="center"
                    justify="space-between"
                >

                    <label>Phone Number</label>
                    <input
                        onChange={onChangePhoneNumber}
                        type="number"
                        value={phoneNum}
                    />
                </Grid>
                {props.buttonText &&
                    <div>
                        <label>Bio</label>
                        <textarea
                            onChange={onChangeBio}
                            value={bio}
                        />
                    </div>
                }
                <Grid container
                    direction="row"
                    alignItems="center"
                    justify="center"
                >

                    <Button variant="contained" color="primary" type="submit">{props.buttonText ? props.buttonText : "Sign Up"}</Button>
                </Grid>
            </form>
            {/* {signUpSuccess && <HomeModal buttonText={"Continue"} onlyLogin={true} noButton={true}/>} */}

        </Grid>
    )
}

export default SignUp;