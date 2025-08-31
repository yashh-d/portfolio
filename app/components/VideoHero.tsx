import React from 'react'
import styles from './VideoHero.module.css'
import VideoTextOverlay from './VideoTextOverlay'

export default function VideoHero() {
  return (
    <section className={styles.videoHero}>
      <video 
        className={styles.heroVideo}
        autoPlay 
        muted 
        loop 
        playsInline
        poster=""
        aria-label="Mediterranean sunrise video background"
      >
        <source src="/Mediterranean_Sunrise_Video_Generation.mp4" type="video/mp4" />
        <p>Your browser does not support the video tag. Please upgrade to a modern browser to view this content.</p>
      </video>
      
      {/* Text overlay with animated cycling words */}
      <VideoTextOverlay />
      
      {/* Optional overlay for future content */}
      <div className={styles.videoOverlay}>
        {/* Additional content can be added here later */}
      </div>
    </section>
  )
} 