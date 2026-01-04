import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // No timer - we wait for user interaction to enable audio
  const handleEnter = () => {
    setLoading(false);
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          // onClick={handleEnter}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--sand-light)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
            // cursor: 'pointer'
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            style={{ fontSize: '4rem', marginBottom: '1rem' }}
          >
            🐚
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="script-text"
            style={{ fontSize: '3rem' }}
          >
            F & S
          </motion.h1>
          <motion.div
            style={{
              width: '150px',
              height: '2px',
              backgroundColor: 'var(--sand-dark)',
              marginTop: '2rem',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'var(--gold)'
              }}
            />
          </motion.div>

          {/* <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            style={{
              marginTop: '2rem',
              color: 'var(--ocean-dark)',
              letterSpacing: '0.2em',
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              opacity: 0.7
            }}
          >
            Tap to Enter
          </motion.p> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
