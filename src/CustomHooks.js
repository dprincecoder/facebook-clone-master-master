//passing all the required arguments so these functions can work properly
//like a post function
export const likePost = async (
	postId,
	DB,
	firebase,
	displayName,
	userAuthId
) => {
	const userRef = DB.collection("posts").doc(postId);
	const increment = firebase.firestore.FieldValue.increment(+1);

	const doc = await DB.collection("posts").doc(postId).collection('likes').doc(userAuthId).get();
	
	if (doc.exists) {
		return;
	} else {
		userRef.update({ likeCount: increment });
		DB.collection("posts").doc(postId).collection("likes").doc(userAuthId).set({
			userThatLiked: displayName,
			userThatLikedID: userAuthId,
		});
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