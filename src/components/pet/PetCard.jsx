import { Button, makeStyles } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '5px solid white'
    },
    img: {
        height: "10rem",
        width: "10rem"
    }
}));


function PetCard(props) {
    console.log(props);
    const classes = useStyles();
    const { name, pic, adoptionStatus, _id } = props.data;
    let url = `${props.location.pathname}/${_id}`;
    if (props.admin) url = `${props.location.pathname}/pet/${_id}`
    return (
        <li className={classes.main}>
            <h1>{adoptionStatus}</h1>
            <h3>{name}</h3>
            <img className={classes.img} src={pic} alt="pet-img" />
            {!props.admin &&
                <Button variant="contained" color="primary">
                    <Link to={url}>See More</Link>
                </Button>
            }
        </li>
    )
}

export default withRouter(PetCard);