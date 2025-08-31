'use client'

import React, { useState, useEffect } from 'react'
import styles from './VideoTextOverlay.module.css'

export default function VideoTextOverlay() {
  const welcomeWords = [
    'Welcome',      // English
    'Bienvenido',   // Spanish
    'Bienvenue',    // French
    'Benvenuto',    // Italian
    'Welkom',       // Dutch
    'Willkommen',   // German
    '欢迎',          // Chinese (Simplified)
    'ようこそ'        // Japanese
  ]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % welcomeWords.length)
        setIsVisible(true)
      }, 300) // Half second fade out before changing word
      
    }, 2500) // Change word every 2.5 seconds

    return () => clearInterval(interval)
  }, [welcomeWords.length])

  return (
    <div className={styles.textOverlay}>
      <div className={styles.textContainer}>
        <h2 className={`${styles.dynamicText} ${isVisible ? styles.visible : styles.hidden}`}>
          {welcomeWords[currentWordIndex]}
        </h2>
      </div>
    </div>
  )
} 