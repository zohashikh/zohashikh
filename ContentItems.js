import React from "react";
export function ContentItems(props) {
    const videos = props.videos;
    const videoItems = videos.map((video) => ( <
        div >
        <
        span >
        <
        img className = "thumbnail"
        src = { video.url }
        alt = { video.title }
        /> <
        p id = "title" > { video.title } < /p> <
        p className = "subtitle" > { video.channel } < /p> <
        p className = "subtitle" > { video.views } < /p> <
        /span> <
        /div>
    ));

    return ( <
        div className = "content-container" >
        <
        span className = "content-item" > { videoItems } < /span> <
        /div>
    );
}