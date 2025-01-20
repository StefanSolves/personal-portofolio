"use client";

import { useState, useEffect } from "react";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(() => new Audio("/music/music.mp3")); // Updated path

  useEffect(() => {
    audio.loop = true; // Enable looping
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    audio.pause();
    setIsPlaying(false);
    audio.currentTime = 0; // Reset to the beginning
  };

  return (
    <div
      className="fixed bottom-4 left-4 bg-gray-800 text-white p-3 rounded-lg shadow-lg flex items-center space-x-2"
      style={{ zIndex: 1000 }}
    >
      <button
        onClick={handlePlayPause}
        className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 transition"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      <button
        onClick={handleStop}
        className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 transition"
      >
        Stop
      </button>
    </div>
  );
};

export default AudioPlayer;
