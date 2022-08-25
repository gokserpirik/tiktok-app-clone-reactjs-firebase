import React from "react";
import "./VideoFooter.css";

import { FaMusic } from "react-icons/fa";
import {BsMusicNoteBeamed} from "react-icons/bs"


function VideoFooter({channel, description, song}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <BsMusicNoteBeamed size={25} className="videoFooter__icon"/>
          <marquee behavior="scroll" direction="right" >
            {song}
    </marquee>

        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
