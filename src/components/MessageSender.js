import React, { useState } from 'react'
import { auth, db } from '../firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const style = {
    form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0`,
    input: `w-full text-xl p-3 bg-gray-800 text-white outline-none border-none`,
    button: `w-[20%] bg-green-600`,
};
function MessageSender({ scroll }) {
    const [newMesssage, setNewMessage] = useState('')
    const { uid, displayName } = auth.currentUser;
    const handleSumit = async (e) => {
        e.preventDefault();
        if (newMesssage == "") {
            alert('Message is missing')
            return
        }
        await addDoc(collection(db, 'messages'), {
            text: newMesssage,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })
        setNewMessage('');
        scroll.current.scrollIntoView({ behavior: 'smooth' })

    }

    return (
        <form className={ style.form } onSubmit={ handleSumit }>
            <input type="text" placeholder=" Enter your message"
                className={ style.input } value={ newMesssage } onChange={ (e) => setNewMessage(e.target.value) } />
            <button className={ style.button } type="submit">
                Send
            </button>

        </form>
    )
}

export default MessageSender