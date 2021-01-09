import { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { adopt, foster, getPetById, returnPet, savePetForLater } from "../../lib/api";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    main: {
        //   marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    img: {
        height: "10rem",
        width: "10rem"
    }
}));

function PetPage(props) {
    console.log("imhere", props);
    const { id, petId } = props.match.params;
    const classes = useStyles();
    const petInitData = {
        name: '',
        pic: '',
        adoptionStatus: '',
        breed: '',
        height: '',
        weight: '',
        color: '',
        hypoallergenic: '',
        dietaryRestrictions: '',
        bio: ''
    };

    const [petData, setPetData] = useState(petInitData);
    useEffect(() => {
        getPetById(props.match.params.petId)
            .then(response => {
                console.log(response);
                setPetData(response.data);
                setPetStatus(response.data.adoptionStatus);
                if (response.data.adoptionStatus === "Adopted") {
                    setPetButtonStatus("Foster");
                } else {
                    setPetButtonStatus("Adopt");
                }
            });
    }, []);

    const {
        name,
        pic,
        adoptionStatus,
        breed,
        height,
        weight,
        color,
        hypoallergenic,
        dietaryRestrictions,
        bio
    } = petData;

    const [petStatus, setPetStatus] = useState(adoptionStatus);

    const [petButtonStatus, setPetButtonStatus] = useState('');



    function onPetStatusChange(e) {

        if (petStatus === "Adopted") {
            setPetStatus("Fostered");
            setPetButtonStatus("Adopt");
            foster(id, petId)
                .then(response => {
                    console.log(response);
                })
        }
        else {

            setPetStatus("Adopted");
            setPetButtonStatus("Foster");
            adopt(id, petId)
                .then(response => {
                    console.log(response);
                })
        }


    }

    function savePet(e) {
        savePetForLater(id, petId)
            .then(response => {
            })

    }

    function onReturnPet(e) {
        returnPet(id, petId)
            .then(response => {
            });
    }

    return (
        <div className={classes.main}>
            <h1>Name: {petData.name}</h1>
            <img className={classes.img} src={pic} alt="pet-img" />
            <div>
                <h4>Pet Status: {petStatus}</h4>
                {props.logged &&
                    <Button variant="contained" color="primary" onClick={onPetStatusChange}>
                        {petButtonStatus}
                    </Button>
                }
                {petStatus !== "adoptionCenter" ? props.logged && <Button variant="contained" color="primary" onClick={onReturnPet}>Return pet</Button> : <></>}
            </div>
            <p>Breed: {breed}</p>
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
            <p>Color: {color}</p>

            <p>{hypoallergenic && "Hypoallergenic"}</p>
            <p>{dietaryRestrictions && `Dietary Restrictions: ${dietaryRestrictions}`}</p>

            <p>{bio}</p>
            {props.logged &&
                <Button variant="contained" color="primary" onClick={savePet}>Save Pet</Button>
            }
        </div>

    )
}

export default withRouter(PetPage);