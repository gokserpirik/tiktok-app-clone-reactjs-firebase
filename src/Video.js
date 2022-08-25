import React, {useRef, useState} from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

function Video({
    url,
    channel,
    description,
    song,
    likes,
    shares,
    messages,
    bookmarks,
    profilepic


}) {
    const [play, setPlay] = useState(false)
    const videoRef = useRef(null)
  return (

    <div className='video'>
        <video src={url} 
        ref={videoRef}
        onClick={() => {
            if(play){
                videoRef.current.pause()
                setPlay(false)
              
            }else{
                videoRef.current.play()
                setPlay(true)
            }
        }}
        className='video__player' autoPlay  loop  playsInline> </video>
        <VideoFooter channel={channel} song={song} description={description} />

        <VideoSidebar profilepic={profilepic} likes={likes} shares={shares} messages={messages} bookmarks={bookmarks} channel={channel} />
    </div>
  )
}

export default Video