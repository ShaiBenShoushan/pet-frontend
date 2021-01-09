// import SignUp from "./unused/SignUp";
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { getInfo } from '../lib/api';
import SignUp from './templates/SignUp';
function ProfilePage(props) {
    return (
        <div>
            <SignUp loggedIn={true} />
        </div>
    )
}

export default ProfilePage;