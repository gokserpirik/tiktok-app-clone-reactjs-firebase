import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import SharePage from "./SharePage";
import Comments from "./Comments";

function Video({
  url,
  channel,
  description,
  song,
  likes,
  shares,
  messages,
  bookmarks,
  profilepic,
  vid,
  comments,
  users,
}) {
  const [share, setShare] = useState(false);
  const [comment, setComment] = useState(false);

  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);
  const videoController = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };
  return (
    <div className="video">
      {comment ? (
        <Comments
          setComment={setComment}
          comments={comments}
          vid={vid}
          users={users}
        />
      ) : null}
      {share ? <SharePage setShare={setShare} /> : null}

      <video
        src={url}
        ref={videoRef}
        onClick={videoController}
        className="video__player"
        autoPlay
        loop
        playsInline
      >
        {" "}
      </video>
      <VideoFooter channel={channel} song={song} description={description} />

      <VideoSidebar
        profilepic={profilepic}
        likes={likes}
        shares={shares}
        messages={messages}
        bookmarks={bookmarks}
        channel={channel}
        vid={vid}
        setShare={setShare}
        setComment={setComment}
      />
    </div>
  );
}

export default Video;
