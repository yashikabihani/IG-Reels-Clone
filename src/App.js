import React from 'react';
import './App.css';
import VideoCard from './VideoCard';

function App() {
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
        <VideoCard 
          channel="BhavyaBihani"
          avatarSrc="logo92.png"
          song="Sanu Kehndi"
          url='VID_20200505_124033.mp4'
          likes={950}
          shares={35}/>
        <VideoCard />
      </div>
    </div>
  );
}

export default App;
