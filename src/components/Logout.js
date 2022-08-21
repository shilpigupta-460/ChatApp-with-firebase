import React from 'react'
import { auth } from '../firebase'
import { signOut } from "firebase/auth";
function Logout() {
    const handleLogout = () => {
        signOut(auth).then(() => {
            console.log('logout');
        }).catch((error) => {
            console.log(error.message);
        });

    }
    return (
        <button className="bg-gray-200 px-4 py-2 hover:bg-gray-100"
            onClick={ handleLogout }>Logout</button>
    )
}

export default Logout