import React, { useState, useEffect } from 'react';
import './App.css';
import VideoCard from './VideoCard';
import db from "./firebase";

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    db.collection('reels').onSnapshot(snapshot => {
      setReels(snapshot.docs.map(doc => doc.data))
    })
  }, [])
  return (
    // BEM naming convention
    <div className="app">
      Hey Yashika Bihani, Let's Build IG-Reels-Clone.

      {/* {Image at the top - Logo} */}
      {/* {Reels Text} */}
      <div className="app__top">
        <img className="app__logo" src="instagram.svg" alt=""></img>
        <h1>Reels</h1>
      </div>

      {/* {Scrollable Container of Videos} */}
      <div className="app__videos">
        {reels.map(({url, likes, shares, channel, avatarSrc, song}) => (
          <VideoCard 
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
