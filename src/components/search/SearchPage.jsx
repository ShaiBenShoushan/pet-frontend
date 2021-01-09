import { Grid } from '@material-ui/core';
import { useState } from 'react';
import GlobalNav from '../GlobalNav';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  }));

function SearchPage(props) {
    const classes = useStyles();
    const [results, setResults] = useState([]);
    function onResultsChange(data) {
        setResults(data);
    }
    return (
        <>
            {props.loggedIn && <GlobalNav />}
            <Grid container className={classes.paper}>
                <Grid container>
                    <SearchBar onResultsChange={onResultsChange} />
                </Grid>
                <Grid container className={classes.paper}>
                    <SearchResults pets={results} />
                </Grid>
            </Grid>
        </>
    )
}

export default SearchPage;
