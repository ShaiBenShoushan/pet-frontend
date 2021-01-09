import { Grid, Button } from "@material-ui/core";
import { useState } from "react";
import AdvancedSearch from "./AdvancedSearch";
import { searchPets } from '../../lib/api';
import { withRouter } from 'react-router-dom';
import qs from 'querystring';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    form: {
        marginTop: theme.spacing(1),

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    formItem: {
        marginLeft: theme.spacing(5),
    }
}));

function SearchBar(props) {
    const classes = useStyles();
    const [search, setSearch] = useState('');
    const [advancedSearch, setAdvancedSearch] = useState(false);
    const [params, setParams] = useState();
    function onSearch(e) {
        e.preventDefault();
        let query = search;
        if (advancedSearch) {

            query = {
                search,
                adopted: params.adopted,
                height: params.height,
                weight: params.weight,
                type: params.type,
                name: params.name
            };
        }
        const searchString = qs.stringify(query);
        props.history.push({
            search: searchString
        })
        searchPets(query)
            .then(response => {
                props.onResultsChange(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    function onChangeSearch(e) {
        setSearch(e.target.value);
    }
    function onChangeCheckBox(e) {
        setAdvancedSearch(e.target.checked);
    }
    function onAdvancedSearch(searchParams) {
        setParams(searchParams);
    }
    return (
        <Grid container
            direction="column"
            alignItems="center"
            justify="center"
            className={classes.paper}
        >
            <form onSubmit={onSearch} className={classes.form}>
                <Grid className={classes.formItem}>

                    <label>Search</label>
                    <input
                        placeholder="By type"
                        onChange={onChangeSearch}
                        type="text"
                        value={search}
                    />
                </Grid>
                <Grid className={classes.formItem}>
                    <input
                        type="checkbox"
                        onChange={onChangeCheckBox}
                        value={advancedSearch}
                    />
                    <label>Advanced</label>
                </Grid>
                <Grid className={classes.formItem}>

                    <Button variant="contained" color="primary" type="submit">Search</Button>
                </Grid>
            </form>
            <Grid container
                direction="column"
                alignItems="center"
                justify="center"
            >
                {advancedSearch && <AdvancedSearch onAdvancedSearch={onAdvancedSearch} />}
            </Grid>
        </Grid>
    )
}

export default withRouter(SearchBar);