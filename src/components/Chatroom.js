import React, { useState, useEffect, useRef } from 'react'
import Messages from './Messages'
import MessageSender from './MessageSender'
// import { auth } from "../firebase"
import { db } from "../firebase"
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
function Chat() {
    const [messages, setMessages] = useState([]);
    const scroll = useRef()

    useEffect(() => {
        // query( collection( database ,documnetName))
        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messages);
        });
        return () => unsub();
    }, []);
    return (<>
        <main className="flex flex-col p-[10px]">
            <h1>Chat Room</h1>
            { messages && messages.map(message =>
                <Messages key={ message.id } message={ message } />) }
            <MessageSender scroll={ scroll } />
            <span ref={ scroll }> </span>
        </main>
    </>)
}

export default Chat