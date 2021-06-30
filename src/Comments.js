import React from 'react'
import { Avatar, Button } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useState } from 'react';
import "./Comments.css";

import DB from './Firebase';
import { useStateValue } from "./StateProvider";
import firebase from "firebase";
import { useEffect } from 'react';
import TelegramIcon from "@material-ui/icons/Telegram";
import ListComments from './ListComments';


const Comments = ({ username, postId, commentCount }) => {
  const [{ user }, dispatch] = useStateValue();

  //store all comments in state
  const [allComments, setAllComments] = useState([]);
  const [oneComment, setOneComment] = useState("");

  //get all comments from database

  //send user comment to that specific post using the postid as its unique hook
  const sendComment = (e) => {
    e.preventDefault();
    DB.collection("posts").doc(postId).collection("comments").add({
      commentContent: oneComment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      imageUrl: user.photoURL,
    });

    //automatically increment comment count on when new comments drop
    // if (postId) {
    //   DB.collection("posts")
    //     .doc(postId)
    //     .update({
    //       commentCount: commentCount++
    //     });
    // }
     const userRef = DB.collection("posts").doc(postId);
     const decrement = firebase.firestore.FieldValue.increment(+1);

     userRef.update({ commentCount: decrement });

    setOneComment("");
  };

  useEffect(() => {
    //check and get only that comments that has this specific postId
    if (postId) {
      DB.collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setAllComments(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    }
  }, []);

  return (
    <div className="container">
      <div className="post-details-header">
        <form>
          <Avatar src={user.photoURL} className="post-details-header-avatar" />
          <div className="post-details-header-details">
            <input
              type="text"
              onChange={(e) => setOneComment(e.target.value)}
              placeholder={`join the conversation ${user.displayName}`}
              className="comment-input-field"
            />
            <button
              className="submit-comment-button"
              type="submit"
              onClick={sendComment}
              disabled={!oneComment}
            >
              <TelegramIcon />
            </button>
          </div>
        </form>
      </div>
      <hr />
      {/* render all comments from database */}
      <div className="all-comments">
        {allComments.length > 0 ? (
          allComments.map((comment) => (
            <ListComments
              key={comment.id}
              username={comment.data.username}
              commentContent={comment.data.commentContent}
              timestamp={comment.data.timestamp}
              imageUrl={comment.data.imageUrl}
            />
          ))
        ) : (
          <p>Be the first to start the conversation.</p>
        )}
      </div>
    </div>
  );
};

export default Comments;
