import { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../utils/constants";
import VideoBox from "./videoBox";
import { Link } from "react-router-dom";

const VideoContainer = ()=>{
    const [videos, setVideos] = useState([]);

    const getVideos = async()=>{
        const data = await fetch(YOUTUBE_API_KEY);
        const json = await data.json();
        console.log(json);
        setVideos(json.items);

    }

    useEffect(()=>{
     getVideos();
    }
    , []);

    return(
        <div className="flex flex-wrap justify-center gap-6 p-6">
            {videos.map((video)=>(
               <Link to={"/watch?v=" + video.id}> <VideoBox
                key={video.id}
                img={video?.snippet?.thumbnails?.medium?.url}
                title={video?.snippet?.title}
                channelName={video?.snippet.channelTitle}
                view={video?.statistics?.viewCount}/>
                </Link>
            ))}
        </div>
    )
}

export default VideoContainer;