import React, { useState, useEffect } from 'react';
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from "./firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";

function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState();
    const [roomMessages, setRoomMessages] = useState();

    useEffect(() => {
        if (roomId) {
            db.collection('Rooms').doc(roomId)
                .onSnapshot((snapshot) => {
                    setRoomDetails(snapshot.data())
                })
        }

        db.collection("Rooms")
            .doc(roomId)
            .collection("Messages")
            .orderBy("timestamp", 'asc')
            .onSnapshot((snapshot) => {
                setRoomMessages(snapshot.docs.map(
                    doc => doc.data()
                ))
            })
    }, [roomId]);

    console.log(roomDetails);

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>

            <div className="chat__messages">
                {/* <Message.../> */}
                {/* {roomMessages.map((message) => (
                    <Message
                        message={message.message}
                        timestamp={message.timestamp}
                        user={message.user}
                        userImage={message.userimage} />
                ))} */}

                {roomMessages && roomMessages.map(
                    ({ message, timestamp, user, userimage }) => (
                        <Message
                            message={message}
                            timestamp={timestamp}
                            user={user}
                            userImage={userimage} />
                    ))}
            </div>

            <ChatInput channelName={roomDetails?.name} channelId={roomId} />
        </div>
    )
}

export default Chat