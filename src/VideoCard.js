import React, {useRef, useState} from 'react'
import './VideoCard.css';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';

function VideoCard({url, likes, shares, channel, avatarSrc, song}) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if(isVideoPlaying){
            //Stop the Video
            videoRef.current.pause();
            setIsVideoPlaying(false);
        }
        else{
            //Play the Video
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    }
    return (
        <div className="videoCard">
            <VideoHeader />
            <video ref= {videoRef}
            onClick={onVideoPress}
            className="videoCard__player" 
            src={url} alt= 'IG Reel Video' 
            loop />
            <VideoFooter 
            channel="BhavyaBihani"
            avatarSrc="logo92.png"
            song="Sanu Kehndi"
            likes={950}
            shares={35}/>
        </div>
    )
}

export default VideoCard
