import { Grid, makeStyles, Box } from '@material-ui/core';
import PetCard from '../pet/PetCard';

function SearchResults(props) {
    console.log(props);
    return (
        <ul>
            {props.pets.map(pet => {
                return (
                    <PetCard
                        key={Math.random()}
                        data={pet}
                    />
                )
            })}
        </ul>
    )
}

export default SearchResults;