import React, {useState} from 'react'
import './VideoSidebar.css'
import ProfilePic from './ProfilePic'

import {
    RiShareForwardFill,
    RiBookmarkFill,
    RiHeartFill,
  
  } from "react-icons/ri";

import { FaCommentDots } from "react-icons/fa";


function VideoSidebar({ profilepic,likes, shares, messages, bookmarks, channel}) {
    const [like, setLike] = useState(false)
    const [bookmarked, setBookmarked] = useState(false)

  return (
    <div className='videoSidebar'>
        <div className="videoSidebar__button">

          <ProfilePic profilepic={profilepic}  username={channel}/>

        </div>
        <div className="videoSidebar__button">
            <RiHeartFill onClick={()=> {setLike(like => !like)}} className={like ? "videoSidebar__liked" : " "} size={30}/>
            <p>{likes}</p>
        </div>
        <div className="videoSidebar__button">
            <FaCommentDots size={30}/>
            <p>{messages}</p>
        </div>
        <div className="videoSidebar__button">
            <RiBookmarkFill onClick={()=> {setBookmarked(bookmarked => !bookmarked)}} className={bookmarked ? "videoSidebar__bookmarked" : " "}  size={30}/> 
            {/* added later, wasn't planned at first */}
            <p>{bookmarks}</p>
        </div>
        <div className="videoSidebar__button">
            <RiShareForwardFill size={30}/>
            <p>{shares}</p>
        </div>
    </div>
  )
}

export default VideoSidebar