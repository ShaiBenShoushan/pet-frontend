import { Grid, Button } from "@material-ui/core";
import { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    form: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    formItem: {
        marginTop: theme.spacing(5),
    },
}));

function AdvancedSearch(props) {
    const classes = useStyles();
    const searchFields = {
        adopted: '',
        height: '',
        weight: '',
        type: '',
        name: ''
    }
    const [search, setSearch] = useState(searchFields);

    function onAdvancedSearch(e) {
        e.preventDefault();
        props.onAdvancedSearch(search);
    }

    function handleChange(e){
        setSearch({
            ...search,
            [e.target.name]:e.target.value
        });
    }

    function onSaveFilter(e){
        console.log(search);
    }
    
    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
        >
            <form onSubmit={onAdvancedSearch} className={classes.form}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    className={classes.formItem}
                >

                    <label>Adoption status</label>
                    <Grid
                        container
                        direction="column"
                        onChange={handleChange}
                    >
                        <Grid>

                            <input
                                type="radio"
                                name="adopted"
                                value="Adopted"
                            />
                            Adopted
                        </Grid>
                        <Grid>

                            <input
                                type="radio"
                                name="adopted"
                                value="Not Adopted"
                            />
                            Not Adopted
                        </Grid>
                    </Grid>
                </Grid>

                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    className={classes.formItem}
                >

                    <label>Height</label>
                    <input
                        type="text"
                        name="height"
                        onChange={handleChange}
                        value={search.height}
                    />
                </Grid>

                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    className={classes.formItem}
                >
                    <label>Weight</label>

                    <input
                        type="text"
                        name="weight"
                        onChange={handleChange}
                        value={search.weight}
                    />
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    className={classes.formItem}
                >
                    <label>Type</label>

                    <input
                        type="text"
                        name="type"
                        onChange={handleChange}
                        value={search.type}
                    />
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    className={classes.formItem}
                >

                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={search.name}
                    />
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    className={classes.formItem}
                >

                    <Button
                    variant="contained" 
                    color="primary" 
                    type="submit"
                    onClick={onSaveFilter}
                    >
                        Save filter
                    </Button>
                </Grid>

            </form>
        </Grid>
    )
}

export default AdvancedSearch;