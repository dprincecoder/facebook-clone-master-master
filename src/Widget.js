import React from 'react';
import './Widget.css'

const Widget = () => {
    return (
        <div className="widget">
            <iframe src="https://www.facebook.com/plugins/post.php?
            href=https%3A%2F%2Fweb.facebook.com%2Fpermalink.php%3Fstory_fbid%3D305758050946424%26id%3D113314173524147&show_text=true&width=500"
                width="500" height="664" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0"
                allowFullScreen={true} allow="autoplay;
             clipboard-write; encrypted-media; picture-in-picture; web-share" allowtransparency="true" title="facebook iframe"></iframe>
        </div>
    )
}

export default Widget;
