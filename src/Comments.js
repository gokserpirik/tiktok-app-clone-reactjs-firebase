import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import {
  RiArrowUpCircleFill,
  RiHeartFill,
  RiHeartLine,
  RiAtLine,
} from "react-icons/ri";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import "./Comments.css";

/* firebase */
import db from "./firebase";
import firebase from "firebase/compat/app";

function Comments({ setComment, comments, vid, users }) {
  const [inputText, setInputText] = useState(null);
  const sendComment = () => {
    const currentComment = {
      creator: {
        name: users[0].username,
        profilepic: users[0].profilepic,
      },
      text: inputText,
      id: `${users[0].username}${Date.now()}`,
    };
    db.collection("videos")
      .doc(vid)
      .update({
        comments: firebase.firestore.FieldValue.arrayUnion(currentComment),
      });
    setInputText("");
  };

  const likeComment = (comment) => {
    if (users[0].likedComments.includes(comment.id)) {
      db.collection("users")
        .doc("currentuser")
        .update({
          likedComments: firebase.firestore.FieldValue.arrayRemove(comment.id),
        });

      comments[comments.indexOf(comments.find((id) => id.id === comment.id))]
        .likes--;

      db.collection("videos").doc(vid).update({
        comments: comments,
      });
    } else {
      db.collection("users")
        .doc("currentuser")
        .update({
          likedComments: firebase.firestore.FieldValue.arrayUnion(comment.id),
        });

      if (
        comments[comments.indexOf(comments.find((id) => id.id === comment.id))]
          .likes
      ) {
        comments[comments.indexOf(comments.find((id) => id.id === comment.id))]
          .likes++;
      } else {
        comments[
          comments.indexOf(comments.find((id) => id.id === comment.id))
        ].likes = 1;
      }

      db.collection("videos").doc(vid).update({
        comments: comments,
      });
    }
  };

  return (
    <div className="Comments">
      <div className="Comments__content">
        <div className="Comments__header">
          <div className="Comments__header__title">Comments</div>
          <div className="Comments__header__close">
            <GrFormClose onClick={() => setComment(false)} />
          </div>
        </div>

        <div className="Comments__body">
          {comments ? (
            comments.map((comment) => (
              <div className="Comments__body__comment">
                <div className="Comments__body__comment__profile">
                  <img src={comment.creator.profilepic} alt="" />
                </div>
                <div className="Comments_body__comment__texts">
                  <div className="Comments__body__comment__username">
                    {comment.creator.name}
                  </div>
                  <div className="Comments__body__comment__text">
                    <p>{comment.text}</p>
                  </div>
                </div>
                <div className="Comments__body__comment__likes">
                  <div
                    className="Comments__body__comment__like"
                    onClick={() => likeComment(comment)}
                  >
                    {users[0].likedComments.includes(comment.id) ? (
                      <RiHeartFill
                        color="#e94256"
                        className="Comments__body__comment__like__true"
                      />
                    ) : (
                      <RiHeartLine className="Comments__body__comment__like__false" />
                    )}
                  </div>
                  <div className="Comments__body__comment__likecount">
                    {comment.likes || 0}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="Comments__body__comment">Bağlantı hatası</p>
          )}
        </div>

        <div className="Comments__addComment">
          <div className="Comments__addComment__profile">
            <img src="https://randomuser.me/api/portraits/women/48.jpg"></img>
          </div>
          <div className="Comments__addComment__inputArea ">
            <input
              placeholder="Add comment..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className={`Comments__addComment__input ${
                inputText && "miniInput"
              }`}
            />
            <div className="Comments__addComment__icons">
              <RiAtLine />
              <MdOutlineEmojiEmotions />
            </div>
          </div>
          {inputText && (
            <div className="Comments__addComment__send">
              <div className="Comments__addComment__send__icon">
                <RiArrowUpCircleFill color="#e94256" onClick={sendComment}  />
              </div>
            </div>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Comments;
