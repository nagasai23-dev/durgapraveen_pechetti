import { useState, useRef, useEffect } from 'react';

const useVideoPlayer = (videoRef) => {
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    speed: 1,
    isMuted: false,
  });

  const togglePlay = () => {
    setPlayerState(prev => ({
      ...prev,
      isPlaying: !prev.isPlaying
    }));
  };

  useEffect(() => {
    if (!videoRef.current) return;
    
    playerState.isPlaying 
      ? videoRef.current.play() 
      : videoRef.current.pause();
  }, [playerState.isPlaying, videoRef]);

  const handleOnTimeUpdate = () => {
    if (!videoRef.current) return;
    
    const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setPlayerState(prev => ({
      ...prev,
      progress
    }));
  };

  const handleVideoProgress = (event) => {
    if (!videoRef.current) return;
    
    const manualChange = Number(event.target.value);
    videoRef.current.currentTime = (videoRef.current.duration / 100) * manualChange;
    setPlayerState(prev => ({
      ...prev,
      progress: manualChange
    }));
  };

  const handleVideoSpeed = (speed) => {
    if (!videoRef.current) return;
    
    videoRef.current.playbackRate = speed;
    setPlayerState(prev => ({
      ...prev,
      speed
    }));
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    
    videoRef.current.muted = !playerState.isMuted;
    setPlayerState(prev => ({
      ...prev,
      isMuted: !prev.isMuted
    }));
  };

  return {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  };
};

export default useVideoPlayer;