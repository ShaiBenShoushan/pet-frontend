import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState, useContext } from 'react';
import { doSignup, updateUserInfo } from "../../lib/api";
import { UserContext } from '../../context/UserContext';
import { validateBio, validateEmail, validateName, validatePhone, validateTwoPassword } from '../../lib/formValidation';
import GlobalNav from '../GlobalNav';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: "#212121",
    color: "blueviolet",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#212121",
    color: "blueviolet",
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
let formFields = {
  firstName: "",
  lastName: '',
  email: '',
  password: '',
  passwordVerif: '',
  phoneNumber: '',
  bio: ''
}
let placeholder = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  bio: ""
}

export default function SignUp(props) {
  const context = useContext(UserContext);

  // React.useEffect(() => {
  //   console.log(context);


  //     setFormInfo(newFormFields);
  //   }
  // }, [])
  if (context.user) {
    formFields = {
      firstName: context.user.firstName,
      lastName: context.user.lastName,
      email: context.user.email,
      phoneNumber: context.user.phoneNumber,
      bio: context.user.bio
    }
  }


  const classes = useStyles();
  const [formInfo, setFormInfo] = useState(formFields);

  async function onSignUp(e) {
    e.preventDefault();
    if (validateName(formInfo.firstName) && validateName(formInfo.lastName) && validateEmail(formInfo.email) && validateTwoPassword(formInfo.password, formInfo.passwordVerif) && validatePhone(formInfo.phoneNumber) && validateBio(formInfo.bio)) {
      if (props.loggedIn) {
        const user = await updateUserInfo(context.user._id, formInfo);
        console.log(user);
      } else {

        await doSignup(formInfo).then(response => {
          console.log(response);
        });
      }
    }
    else {
    }
  }

  function handleChange(e) {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value
    });


  }


  return (
    <>
      { props.loggedIn && <GlobalNav />}
      < Container component="main" maxWidth="xs" >
        {/* <CssBaseline /> */}
        < div className={classes.paper} >
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
        </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={formInfo.firstName}
                  onChange={handleChange}
                  placeholder={placeholder.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  value={formInfo.lastName}
                  onChange={handleChange}
                  placeholder={placeholder.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formInfo.email}
                  onChange={handleChange}
                  placeholder={placeholder.email}
                />
              </Grid>
              {
                !props.loggedIn &&
                <>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      value={formInfo.password}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="passwordVerif"
                      label="Password Verification"
                      type="password"
                      id="passwordVerif"
                      autoComplete="current-password"
                      value={formInfo.passwordVerif}
                      onChange={handleChange}
                    />
                  </Grid>
                </>
              }
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number"
                  type="phoneNumber"
                  id="phoneNumber"
                  value={formInfo.phoneNumber}
                  onChange={handleChange}
                  placeholder={placeholder.phoneNumber}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="bio"
                  label="Bio"
                  type="bio"
                  id="bio"
                  value={formInfo.bio}
                  onChange={handleChange}
                  placeholder={placeholder.bio}
                />
              </Grid>
            </Grid>
            <Button
            color="primary"
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              onClick={onSignUp}
            >
              {props.loggedIn ? "Save Changes" : "Sign Up"}
            </Button>

          </form>
        </div >
        <Box sx={{ mt: 5 }}>
          <Copyright />
        </Box>
      </Container >
    </>
  );
}
