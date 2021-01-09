
import { useState } from "react";
import { Button, Grid, makeStyles } from "@material-ui/core";
import MyOwnedPetsPagination from "../pagination/MyOwnedPetsPagination";
import MySavePetsPagination from "../pagination/MySavePetsPagination";
import GlobalNav from "../GlobalNav";
const useStyles = makeStyles((theme) => ({
    grid: {
        display: 'flex',
        flexDirection: 'row',

    },

    button: {
        margin: theme.spacing(3)
    }
}));


function MyPetsPage(props) {
    const classes = useStyles();
    const [toggle, setToggle] = useState(false);
    function onSavedPets(e) {
        setToggle(false);
    }
    function onMyPets(e) {
        setToggle(true);
    }

    return (
        <>
            <GlobalNav />
            <Grid
                className={classes.grid}
            >

                <Button
                    variant="contained"
                    color="primary"
                    onClick={onSavedPets}
                    className={classes.button}
                >
                    Saved Pets
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onMyPets}
                    className={classes.button}
                >
                    My Pets
                </Button>
            </Grid>
            {
                toggle ?
                    <MyOwnedPetsPagination />
                    :
                    <MySavePetsPagination />
            }
        </>

    )
}

export default MyPetsPage;