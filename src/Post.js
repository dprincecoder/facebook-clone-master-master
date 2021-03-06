import { Avatar } from "@material-ui/core";
import {
	AccountCircleOutlined,
	ChatBubbleOutline,
	ExpandMoreOutlined,
	NearMe,
	ThumbUp,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./Post.css";
import {
	FacebookShareButton,
	LinkedinShareButton,
	TelegramShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from "react-share";
import {
	FacebookIcon,
	LinkedinIcon,
	TelegramIcon,
	TwitterIcon,
	WhatsappIcon,
} from "react-share";

import Comments from "./Comments";
import { useStateValue } from "./StateProvider";
import DB, { auth } from "./Firebase";
import ShareButton, { likePost, boostPost } from "./CustomHooks"
import firebase from "firebase";


const Post = ({
	profilePic,
	image,
	username,
	timestamp,
	massage,
	postId,
	commentCount,
	likeCount,
}) => {
	const [openShare, setOpenShare] = useState(false);
	const [{ user }, dispatch] = useStateValue();
	const [userAuthId, setAuthuserId] = useState("");
	const [displayName, setDisplayName] = useState("")

	//toggle the react share button
	const share = () => {
		setOpenShare(!openShare);
	};
	// let liked;
	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			const { uid, displayName } = userAuth;
			setDisplayName(displayName)
			setAuthuserId(uid);
		});
	}, [])

	const addMore = {
		profilePic,
		image,
		username,
		timestamp,
		massage
	};

	const more = {
		className: "share-body"
	}

	return (
		<div className={`post ${openShare ? "open-share" : ""}`}>
			<div className="post-top">
				<Avatar src={profilePic} className="post-avatar" />
				<div className="post-top-info">
					<h3>{username}</h3>
					<p>{new Date(timestamp?.toDate()).toUTCString()}</p>
				</div>
			</div>

			<div className="post-bottom">
				<p>{massage}</p>
			</div>

			<div className="post-image">
				<img src={image} alt="" className="post-img" />
			</div>

			<div className="post-options">
				<div
					className="post-option"
					onClick={() =>
						likePost(
							postId,
							DB,
							firebase,
							username,
							userAuthId,
							displayName
						)
					}>
					{likeCount > 0 ? (
						<>
							{" "}
							<ThumbUp className="space" /> {likeCount}{" "}
						</>
					) : (
						<ThumbUp />
					)}
				</div>
				{likeCount > 3 && (
					<div className="post-option" onClick={() => boostPost(DB, postId, {...addMore})}>
					Boost
					</div>
				)
				}
				<div className="post-option">
					{commentCount > 0 ? (
						<>
							{" "}
							<ChatBubbleOutline className="space" /> {commentCount}{" "}
						</>
					) : (
						<ChatBubbleOutline />
					)}
				</div>
				<div className="post-option" onClick={share}>
					<NearMe />
				</div>
				<div className="post-option">
					<AccountCircleOutlined />
					<ExpandMoreOutlined />
				</div>
			</div>
			<ShareButton {...more}>
				<ul className="share-item">
					<li className="share-list">
						<FacebookShareButton title={username} quote={massage} url={image}>
							<FacebookIcon size={28} round={true} />
						</FacebookShareButton>
					</li>
					<li className="share-list">
						<WhatsappShareButton title={username} quote={massage} url={image}>
							<WhatsappIcon size={28} round={true} />
						</WhatsappShareButton>
					</li>
					<li className="share-list">
						<LinkedinShareButton title={username} quote={massage} url={image}>
							<LinkedinIcon size={28} round={true} />
						</LinkedinShareButton>
					</li>
					<li className="share-list">
						<TwitterShareButton
							title={username}
							quote={massage}
							url={image}
							via={username}
							hashtags={`#${username}`}>
							<TwitterIcon size={28} round={true} />
						</TwitterShareButton>
					</li>
					<li className="share-list">
						<TelegramShareButton title={username} quote={massage} url={image}>
							<TelegramIcon size={28} round={true} />
						</TelegramShareButton>
					</li>
				</ul>
			</ShareButton>
			{/* comments */}
			<hr />
			<div className="pop-up-comment">
				<Comments
					profilePic={profilePic}
					postId={postId}
					username={username}
					commentCount={commentCount}
				/>
			</div>
		</div>
	);
};

export default Post;
