import { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';
import { getFullUser } from "../../../lib/api";
import MyPetsList from "../../pet/MyPetsList";

function UserPage(props) {
    const [user, setUser] = useState({ item: {}, ownedPets: [], savedPets: [] });
    useEffect(() => {
        getFullUser(props.match.params.userId)
            .then(response => {
                console.log(response);
                setUser(response.data);
            });
    }, [])
    console.log(user);
    return (
        <div>
            <h1>Name: {user.item.firstName + user.item.lastName}</h1>
            <p>Email: {user.item.email}</p>
            <p>Phone: {user.item.phoneNumber}</p>
            <p>Bio: {user.item.bio}</p>
            <div>
                <p>Owned pets</p>
                {

                    "No pets owned" && < MyPetsList pets={user.ownedPets} admin={true} />
                }
            </div>
            <div>

                <p>Saved pets</p>
                {

                    "No saved pets" && <MyPetsList pets={user.savedPets} admin={true} />
                }
            </div>
        </div>
    )
}

export default withRouter(UserPage);