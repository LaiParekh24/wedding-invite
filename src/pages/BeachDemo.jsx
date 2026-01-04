import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import CustomCursor from '../components/CustomCursor';
import Venue from '../components/Venue';

const BeachDemo = () => {
  const ref = useRef(null);

  return (
    <div className="beach-demo-page" style={{ backgroundColor: '#fdfbf7', minHeight: '100vh' }}>
      <CustomCursor />
      <Navbar />
      
      <div ref={ref} style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
        {/* Background Image - Long Scroll */}
        <img 
          src="https://framerusercontent.com/images/025XnvK41fOjF7kG0dgCunVNTcc.png?width=1347&height=4645"
          alt="Beach Background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            zIndex: 0
          }}
        />

        {/* Content Overlay */}
        <div style={{ position: 'relative', zIndex: 1, paddingBottom: '100px' }}>
          
          {/* Hero Section */}
          <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: '#fff', padding: '15vh 1rem 20vh' }}>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <h1 style={{ fontSize: 'clamp(3rem, 9vw, 6rem)', fontFamily: 'Cinzel, serif', textShadow: '0 2px 10px rgba(0,0,0,0.3)', lineHeight: 1.2, margin: 0 }}>
                  SHREY
                </h1>
                <span style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontFamily: 'Cinzel, serif', textShadow: '0 2px 10px rgba(0,0,0,0.3)', letterSpacing: '0.2em', margin: '0.5rem 0' }}>
                  WEDS
                </span>
                <h1 style={{ fontSize: 'clamp(3rem, 9vw, 6rem)', fontFamily: 'Cinzel, serif', textShadow: '0 2px 10px rgba(0,0,0,0.3)', lineHeight: 1.2, margin: 0 }}>
                  FALAK
                </h1>
              </div>
            </motion.div>
          </div>

          {/* Formal Invite Section */}
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'rgba(253, 251, 247, 0.9)', padding: '4rem 1rem', margin: '60vh 1rem 0' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p style={{ fontSize: '1.2rem', marginBottom: '1rem', fontFamily: 'Cinzel, serif' }}>|| ॐ श्री गणेशाय नम ||</p>
              <p style={{ fontSize: '1rem', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>With the heavenly blessings of</p>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', fontWeight: '500' }}>Smt. Kaumudiben & Sh. Jayantilal Parekh</p>
              
              <p style={{ fontSize: '1rem', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>Mrs. Kashmira & Mr. Sanjay Parekh</p>
              <p style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'Cinzel, serif' }}>INVITE</p>
              <p style={{ fontSize: '1rem', marginBottom: '2rem', letterSpacing: '0.1em' }}>You to join us in the wedding celebrations of</p>
              
              <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontFamily: 'Cinzel, serif', color: '#1a1a1a', margin: '1rem 0', lineHeight: 1.2 }}>Shrey</h1>
              <span style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', verticalAlign: 'middle' }}>&</span> 
              <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontFamily: 'Cinzel, serif', color: '#1a1a1a', margin: '1rem 0', lineHeight: 1.2 }}>Falak</h1>
              
              <p style={{ fontSize: '1rem', marginTop: '2rem', letterSpacing: '0.1em' }}>Daughter of</p>
              <p style={{ fontSize: '1.1rem', fontWeight: '500' }}>Mrs. Falguni & Mr. Sanjay Shah</p>
            </motion.div>
          </div>

          {/* Events Section */}
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
            <p style={{ textAlign: 'center', fontSize: '1.5rem', fontFamily: 'Cinzel, serif', marginBottom: '4rem', color: '#1a1a1a' }}>On the following events</p>

            {/* Font Import */}
            <style>
              {`
                @import url('https://fonts.googleapis.com/css2?family=Cormorant+Infant:wght@400;600;700&family=Cormorant:wght@400;600;700&display=swap');
              `}
            </style>

            {[
              // { title: 'Mehendi', date: 'Friday, March 9th 2026', time: '6pm Onwards', location: 'Taj Exotica Resort, Goa' },
              // { title: 'Haldi', date: 'Saturday, March 10th 2026', time: '10am Onwards', location: 'Taj Exotica Resort, Goa' },
              { title: 'Cocktail', date: 'Saturday, March 10th 2026', time: '7pm Onwards', location: 'JW Mariott, Mussoorie' },
              { title: 'Wedding', date: 'Sunday, March 11th 2026', time: '11am Onwards', location: 'Taj Exotica Resort, Goa' },
              { title: 'Reception', date: 'Sunday, March 11th 2026', time: '7pm Onwards', location: 'Taj Exotica Resort, Goa' }
            ].map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                style={{ 
                  position: 'relative',
                  width: '100%',
                  maxWidth: '400px',
                  margin: '0 auto 6rem', // Increased bottom margin for leaves overlap
                  aspectRatio: '2/3',
                  isolation: 'isolate',
                }}
              >
                {/* Base Shape */}
                <div style={{ position: 'absolute', inset: '24%', zIndex: 0 }}>
                   <img src="https://framerusercontent.com/images/jxOPDatjtvJcg2C0syqwr1WsHs.png" alt="" style={{ width: '100%', height: '100%', borderRadius: '30%', objectFit: 'cover', display: 'block' }} />
                </div>
                
                {/* Border/Frame */}
                <div style={{ position: 'absolute', inset: 0, zIndex: 1, filter: 'drop-shadow(0 0 9px rgba(0,0,0,0.8))' }}>
                   <img src="https://framerusercontent.com/images/igxDnCEjBozB9NGYPnTUlljFk.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'fill', display: 'block' }} />
                </div>

                {/* Leaves Decoration */}
                <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}>
                    <img src="https://framerusercontent.com/images/lkjJYEzOGIA7bz1eXTWpMfHpsjc.png" alt="" style={{ position: 'absolute', width: '75%', height: 'auto', top: '0', left: '0', transform: 'rotate(-14deg)', objectFit: 'contain' }} />
                    <img src="https://framerusercontent.com/images/lkjJYEzOGIA7bz1eXTWpMfHpsjc.png" alt="" style={{ position: 'absolute', width: '75%', height: 'auto', bottom: '0', right: '0', transform: 'rotate(174deg)', objectFit: 'contain' }} />
                </div>

                {/* Content */}
                <div style={{ position: 'absolute', inset: 0, zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center', color: 'rgb(230, 211, 255)' }}>
                    <h3 style={{ fontFamily: '"Cormorant Infant", serif', fontSize: 'clamp(2rem, 8vw, 45px)', margin: 0, lineHeight: '1.5' }}>{event.title}</h3>
                    <p style={{ fontFamily: '"Cormorant", serif', fontSize: 'clamp(0.8rem, 3vw, 14px)', margin: '1rem 0 0.2rem', lineHeight: '1' }}>{event.date}</p>
                    <p style={{ fontFamily: '"Cormorant", serif', fontSize: 'clamp(0.8rem, 3vw, 14px)', margin: '0.2rem 0', lineHeight: '1' }}>{event.location}</p>
                    <p style={{ fontFamily: '"Cormorant", serif', fontSize: 'clamp(0.8rem, 3vw, 14px)', margin: '0.2rem 0', lineHeight: '1' }}>{event.time}</p>
                    <p style={{ fontFamily: '"Cormorant", serif', fontSize: 'clamp(0.8rem, 3vw, 14px)', fontWeight: 700, marginTop: '1rem', textDecoration: 'underline', cursor: 'pointer', lineHeight: '1' }}>See the route</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* <Venue /> */}
          {/* Footer Space */}
          <div style={{ height: '20vh' }} />
        </div>
      </div>
    </div>
  );
};

export default BeachDemo;
