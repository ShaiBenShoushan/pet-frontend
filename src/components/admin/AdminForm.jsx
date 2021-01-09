import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import AddPetForm from "../templates/AddPetForm";


function AdminForm(props){
    return (
        <div>
            <AddPetForm/>
        </div>
    )
}

export default AdminForm;