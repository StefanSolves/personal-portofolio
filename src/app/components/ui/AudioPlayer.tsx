"use client";

import { useState, useEffect, useRef } from "react";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio only on client side
    audioRef.current = new Audio("/music/music.mp3");
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    if (!audioRef.current) return;
    
    audioRef.current.pause();
    setIsPlaying(false);
    audioRef.current.currentTime = 0;
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