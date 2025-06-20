import React, { useState, useRef } from "react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import LouisArmstrongAlbum from "../assets/images/album-louis-armstrong.webp"
import music from "../assets/music/Louis Armstrong-What A Wonderful World.mp3"
const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioSrc = music; //audio 

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className=" text-white w-64 rounded-xl max-w-md ">
      {/* Music and autor img */}
      <div className="text-center">
        <img
          src={LouisArmstrongAlbum}
          alt="Album Cover"
          className="w-2/4 mt-4 mx-auto rounded-3xl lg:rounded-2xl shadow-md"
        />
        <h2 className="text-sm font-bold mt-4">What A Wonderful World</h2>
        <p className="text-xs text-gray-400">Louis Armstrong</p>
      </div>

      {/* media controls */}
      <div className="flex items-center justify-center gap-4 mt-1">
        <FaBackward className="cursor-pointer text-gray-400 hover:text-white transition" size={12} />
        <button
          onClick={togglePlayPause}
          className="bg-gray-200 p-3 rounded-full flex items-center justify-center hover:bg-gray-400 transition"
        >
          {isPlaying ? <FaPause size={10} className="text-gray-800" /> : <FaPlay size={10} className="text-gray-800" />}
        </button>
        <FaForward className="cursor-pointer text-gray-400 hover:text-white transition" size={12} />
      </div>

      {/* progress bar */}
      <div className="">
        <audio
          ref={audioRef}
          src={audioSrc}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        ></audio>
        <div className="flex justify-around text-xs text-gray-200">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={(e) => (audioRef.current.currentTime = e.target.value)}
          className="w-4/6 mt-2 mb-4 accent-sky-600 mx-auto flex"
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
