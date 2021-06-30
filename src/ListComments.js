import React from 'react'
import { Avatar } from '@material-ui/core'
import './ListComments.css'

const ListComments = ({imageUrl, username, timestamp, commentContent}) => {
    return (
      <div>
        <div className="show-a-comment">
          <div className="comment-header">
            <Avatar src={imageUrl} className="comment-header-avatar" />
            <div className="comment-header-name">
              <h3>{username}</h3>
              <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>
          </div>

          <div className="comment-content">
            <p>{commentContent} </p>
          </div>
        </div>
      </div>
    );
}

export default ListComments
