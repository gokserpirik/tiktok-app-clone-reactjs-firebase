import Video from "./Video";
import "./App.css";
import { useState, useEffect } from "react";
import db from "./firebase.js";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { where } from "firebase/firestore";

/* I keep Vid URL in-app. Because many websites give error when I want vid data from them. */

function App() {
  const [videos, setVideos] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const listRef = db.collection("users");
  const [users, loading, error] = useCollectionData(
    listRef,
    where("username", "==", "currentuser")
  );
  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) => {
      setVideos(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({
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
          }) => {
            return (
              <Video
                profilepic={profilepic}
                url={url}
                channel={channel}
                description={description}
                song={song}
                likes={likes}
                shares={shares}
                messages={messages}
                bookmarks={bookmarks}
                vid={vid}
                comments={comments}
                users={users}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default App;
