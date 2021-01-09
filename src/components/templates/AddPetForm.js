import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState, useEffect } from 'react';
import { Input, } from '@material-ui/core';
import { adminNewPet, getPetById } from '../../lib/api';
import { withRouter } from 'react-router-dom';
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

const formFields = {
  name: '',
  type: '',
  adoptionStatus: '',
  height: '',
  weight: '',
  color: '',
  bio: '',
  hypoallergenic: '',
  dietaryRestrictions: '',
  breed: ''
}
function SignUp(props) {

  const classes = useStyles();
  const [formInfo, setFormInfo] = useState(formFields);
  const [picture, setPicture] = useState(null);

  function onSubmit(e) {
    e.preventDefault();
    let formData = new FormData();

    formData.append('data', JSON.stringify(formInfo));
    formData.append('picture', picture);
    adminNewPet("/api/pets/adminNewPetPic", formData);

  }


  useEffect(() => {
    if (props.match.params.petId) {
      getPetById(props.match.params.petId)
        .then(response => {
          setFormInfo(response.data);
        });
    }
  }, []);


  function handleChange(e) {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value
    });
  }
  function handleFileUpload(e) {
    const file = e.target.files[0];
    setPicture(file);
  }


  return (
    <>
    <GlobalNav/>
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Pet information
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                required
                fullWidth
                id="name"
                label="Pet Name"
                autoFocus
                value={formInfo.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="type"
                label="Type"
                name="type"
                autoComplete="type"
                value={formInfo.type}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                type="file"
                fullWidth
                id="picture"
                name="picture"
                onChange={handleFileUpload}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="adoptionStatus"
                label="Adoption Status"
                name="adoptionStatus"
                autoComplete="adoptionStatus"
                value={formInfo.adoptionStatus}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="height"
                label="Height"
                type="height"
                id="height"
                autoComplete="height"
                value={formInfo.height}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="weight"
                label="Weight"
                type="weight"
                id="weight"
                autoComplete="weight"
                value={formInfo.weight}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="color"
                label="Color"
                type="text"
                id="color"

                value={formInfo.color}
                onChange={handleChange}
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
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={onSubmit}
          >
            Add new pet!
          </Button>
          <Grid container>
            <Grid item>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box sx={{ mt: 5 }}>
        <Copyright />
      </Box>
    </Container>
    </>
  );
}


export default withRouter(SignUp);