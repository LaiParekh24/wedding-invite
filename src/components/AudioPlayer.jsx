import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Volume2, VolumeX } from 'lucide-react';
import { weddingConfig } from '../config';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play blocked by browser. User interaction required."));
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Function to handle play on interaction
    const handleInteraction = () => {
      audio.play()
        .then(() => {
          setIsPlaying(true);
          // Clean up listeners once played
          ['click', 'touchstart', 'touchend', 'pointerdown', 'keydown'].forEach(event => 
            document.removeEventListener(event, handleInteraction)
          );
        })
        .catch((e) => {
          console.debug("Play failed on interaction:", e);
        });
    };

    // Attempt autoplay immediately
    audio.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((e) => {
        console.debug("Autoplay blocked. Waiting for interaction.");
        setIsPlaying(false);
        setShowTooltip(true); // Show tooltip to hint that music is available
        
        // Add listeners for fallback - including touchend for mobile
        ['click', 'touchstart', 'touchend', 'pointerdown', 'keydown'].forEach(event => 
          document.addEventListener(event, handleInteraction)
        );
      });

    // Cleanup on unmount
    return () => {
      ['click', 'touchstart', 'touchend', 'pointerdown', 'keydown'].forEach(event => 
        document.removeEventListener(event, handleInteraction)
      );
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="audio-player-container">
      <audio ref={audioRef} src={weddingConfig.audioUrl} loop />
      
      <AnimatePresence>
        {showTooltip && !isPlaying && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="glass"
            style={{
              position: 'absolute',
              right: '80px',
              bottom: '10px',
              padding: '0.8rem 1.2rem',
              whiteSpace: 'nowrap',
              fontSize: '0.9rem',
              color: 'var(--ocean-deep)',
              pointerEvents: 'none'
            }}
          >
            Play our song ✨
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="audio-toggle glass"
        style={{
          width: '64px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <Volume2 size={28} color="var(--ocean-blue)" strokeWidth={1.5} />
            </motion.div>
          ) : (
            <motion.div
              key="paused"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <Music size={28} color="var(--coral)" strokeWidth={1.5} />
            </motion.div>
          )}
        </AnimatePresence>
        
        {isPlaying && (
          <div className="music-bars" style={{ bottom: '12px', top: 'auto' }}>
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="bar"
                animate={{
                  height: [4, 12, 6, 10, 4],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
                style={{ width: '2px', background: 'var(--ocean-blue)' }}
              />
            ))}
          </div>
        )}
      </motion.button>
    </div>
  );
};


export default AudioPlayer;
