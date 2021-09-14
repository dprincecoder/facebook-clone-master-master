import React from 'react'

//like a post function
export const likePost = async (
	postId,
	DB,
	liked,
	firebase,
	username,
	userAuthId,
	displayName
) => {
	const userRef = DB.collection("posts").doc(postId);
	const increment = firebase.firestore.FieldValue.increment(+1);
	const decrement = firebase.firestore.FieldValue.increment(-1);

	DB.collection("likedPosts").doc(postId).set({
		userThatLiked: displayName,
		// alreadyLiked: userAuthId,
		timestamp: new Date(),
	});

	const doc = await DB.collection("likedPosts").doc(postId).get();
	const docUpdated = await DB.collection("likedPosts").doc(postId);
	const { alreadyLiked } = doc.data();

	if (alreadyLiked) {
		userRef.update({ likeCount: decrement });
		docUpdated.update({ alreadyLiked: null });
	} else {
		userRef.update({ likeCount: increment });
		docUpdated.update({ alreadyLiked: userAuthId });
	}
};

//boost
export const boostPost = (DB, postId, ...otherProps) => {
	//you need to declare you otherProps information you tend to
	//add to the db in which ever component you are calling this function
	DB.collection('posts').doc(postId).collection('boost').add({...otherProps})
}

//share buttun action
const ShareButton = ({ children, ...otherProps }) => {
	return (
		<div {...otherProps}>
			{children}
		</div>
	);
};

export default ShareButton;