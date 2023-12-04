import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase"
import { useEffect, useState } from "react";
import { Post } from '../component/Post'


export const Main = () => {
  const [ postLists, setPostLists ] = useState(null);
  const postRefs = collection(db, "posts");

  useEffect(() => {
    const getPostData = async () => {
      const data = await getDocs(postRefs)
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPostData();
  })

  // const onHandleLike = () => {
  //   console.log("Like the post")
  // };

  // const onHandleDislike = () => {
  //   console.log("Dislike the post")
  // };

  return (<Post postLists={postLists} />);
  

}
  
// handleLike={onHandleLike}  handleDislike={onHandleDislike}