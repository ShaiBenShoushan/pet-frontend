import User from './User';

function UserList (props){
    return (
        <ul>
        {props.users.map(user => {
            return (
                <User
                    key={Math.random()}
                    data={user}
                />
            )
        })}
    </ul>
    )
}

export default UserList;