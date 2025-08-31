'use client'

import React, { useState } from 'react'
import styles from '../page.module.css'

interface PublicationImageProps {
  src: string
  alt: string
}

export default function PublicationImage({ src, alt }: PublicationImageProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className={styles.cardImage}>
      {!imageError ? (
        <img 
          src={src}
          alt={alt}
          className={styles.cardImageElement}
          onError={() => setImageError(true)}
        />
      ) : (
        <div className={styles.imagePlaceholder}>
          <span className={styles.placeholderText}>📊 Polygon Report</span>
        </div>
      )}
    </div>
  )
} 