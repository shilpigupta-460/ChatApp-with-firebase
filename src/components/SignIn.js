import React from 'react'
import GoogleButton from 'react-google-button'
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from '../firebase'
const style = {
    wrapper: `flex justfy-enter p-2`
}

const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
}
function SignIn() {
    return (
        <div className={ style.wrapper }>
            <GoogleButton onClick={ signIn } />

            {/* <button className="btn btn-primary" onClick={ signIn }> SignIn</button> */ }
        </div>
    )
}

export default SignIn