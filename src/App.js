import Video from './Video';
import './App.css';
import {useState, useEffect} from 'react'
import db from './firebase.js'



/* I keep Vid URL in-app. Because many websites give error when I want vid data from them. */

function App() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    db.collection('videos').onSnapshot(snapshot => {
      setVideos(snapshot.docs.map(doc => doc.data()))

    })
  
  
  }, [videos])
  
  return (
    <div className='app'>
      <div className="app__videos">

        {videos.map(({ url,
    channel,
    description,
    song,
    likes,
    shares,
    messages,
    bookmarks,
    profilepic      
  }) => {
      return(

        <Video
        profilepic={profilepic}
      url ={url}
      channel = {channel}
      description = {description}
      song = {song}
      likes = {likes}
      shares = {shares}
      messages = {messages}
      bookmarks = {bookmarks}
       />

        )})}
        
      
      </div>

    </div>
  );
}

export default App;
