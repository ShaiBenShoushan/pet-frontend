import PetCard from './PetCard';


function MyPetsList(props) {
    console.log(props);
    return (
        <ul>
            {props.pets.map(pet => {
                return (
                    <PetCard
                        admin={props.admin}
                        key={Math.random()}
                        data={pet}
                    />
                )
            })}
        </ul>
    )
}

export default MyPetsList;