import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './PostInput.css';
import TelegramIcon from '@material-ui/icons/Telegram';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { useStateValue } from './StateProvider';
import DB from './Firebase';
import firebase from 'firebase';

const PostInput = () => {
    //use state to handle inputs value and when inputs are changed
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("")

        //use usestate hook
    const [{user}, dispatch] = useStateValue()

    //send user post function
    const sendPost = (e) => {
        e.preventDefault()

        //push on to firebase db when user post something
        DB.collection("posts").add({
          massage: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          profilePic: user.photoURL,
          username: user.displayName,
          image: imageUrl,
          likeCount: 0,
          commentCount: 0,
        });
        setInput("");
        setImageUrl("");
    }
    return (
        <div className="postInput">
            <div className="postInput-top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input value={input}  onChange={e => setInput(e.target.value)} type="text" className="postInput-inputField" placeholder={`what is on mind ${user.displayName}?`} />
                    <input type="text" placeholder="image URl (optional)"  value={imageUrl} onChange={e => setImageUrl(e.target.value)}/>
                    
                    <button type="submit" onClick={sendPost}>{<TelegramIcon/>}</button>
                </form>
            </div>

            <div className="postInput-bottom">
                <div className="postInput-options">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="postInput-options">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="postInput-options">
                    <EmojiEmotionsIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
            
        </div>
    )
}

export default PostInput;
