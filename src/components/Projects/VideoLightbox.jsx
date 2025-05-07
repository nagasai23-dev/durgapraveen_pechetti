import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const VideoLightbox = ({ videoSrc, thumbnail, onClose }) => {
  const videoRef = useRef(null);
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="lightbox-content"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="close-btn" onClick={onClose}>
            <svg viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
          
          <div className="video-wrapper">
            <video
              ref={videoRef}
              src={videoSrc}
              poster={thumbnail}
              controls
              autoPlay
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoLightbox;