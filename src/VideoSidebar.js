import React, { useState, useEffect } from "react";
import "./VideoSidebar.css";
import ProfilePic from "./ProfilePic";
import firebase from "firebase/compat/app";
import db from "./firebase";

import {
  RiShareForwardFill,
  RiBookmarkFill,
  RiHeartFill,
} from "react-icons/ri";

import { FaCommentDots } from "react-icons/fa";

function VideoSidebar({
  profilepic,
  likes,
  shares,
  messages,
  bookmarks,
  channel,
  vid,
  setShare,
  setComment,
}) {
  const sharePage = () => {
    setShare((share) => !share);
  };

  const [like, setLike] = useState(false);

  useEffect(() => {
    db.collection("users")
      .doc("currentuser")
      .onSnapshot((doc) => {
        setLike(doc.data().like.includes(vid) || false);
      });
  }, [like]);

  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    db.collection("users")
      .doc("currentuser")
      .onSnapshot((doc) => {
        setLike(doc.data().bookmark.includes(vid) || false);
      });
  }, [bookmarked]);

  const likeVideo = () => {
    setLike((like) => !like);
    if (!like) {
      db.collection("users")
        .doc("currentuser")
        .update({
          like: firebase.firestore.FieldValue.arrayUnion(vid),
        });
    } else {
      db.collection("users")
        .doc("currentuser")
        .update({
          like: firebase.firestore.FieldValue.arrayRemove(vid),
        });
    }
  };

  const bookmarkVideo = () => {
    setBookmarked((bookmarked) => !bookmarked);

    if (!bookmarked) {
      db.collection("users")
        .doc("currentuser")
        .update({
          bookmark: firebase.firestore.FieldValue.arrayUnion(vid),
        });
    } else {
      db.collection("users")
        .doc("currentuser")
        .update({
          bookmark: firebase.firestore.FieldValue.arrayRemove(vid),
        });
    }
  };

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        <ProfilePic profilepic={profilepic} username={channel} />
      </div>
      <div className="videoSidebar__button">
        <RiHeartFill
          onClick={likeVideo}
          className={like ? "videoSidebar__liked" : " "}
          size={30}
        />
        <p>{likes}</p>
      </div>
      <div className="videoSidebar__button">
        <FaCommentDots
          size={30}
          onClick={() => {
            setComment(true);
          }}
        />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <RiBookmarkFill
          onClick={bookmarkVideo}
          className={bookmarked ? "videoSidebar__bookmarked" : " "}
          size={30}
        />

        <p>{bookmarks}</p>
      </div>
      <div className="videoSidebar__button">
        <RiShareForwardFill size={30} onClick={() => sharePage()} />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
