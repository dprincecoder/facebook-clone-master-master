//like a post function
export const likePost = async (postId, DB, liked, firebase, username, authuser) => {
	const userRef = DB.collection("posts").doc(postId);
	const increment = firebase.firestore.FieldValue.increment(+1);
	const decrement = firebase.firestore.FieldValue.increment(-1);

	DB.collection("likedPosts")
		.doc(postId).set({
            userThatLiked: authuser,
			timestamp: new Date(),
		});

    const doc = await DB.collection("likedPosts").doc(postId).get();
    const docUpdated = await DB.collection("likedPosts").doc(postId);
    const {alreadyLiked} = doc.data()
 

    if (alreadyLiked === true) {
        userRef.update({ likeCount: decrement });
        docUpdated.update({alreadyLiked: false});
		} else {
        userRef.update({ likeCount: increment });
			docUpdated.update({ alreadyLiked: true });
        
		}
};
