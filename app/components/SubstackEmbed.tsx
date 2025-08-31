'use client'

import React, { useEffect } from 'react'
import styles from '../page.module.css'

interface SubstackEmbedProps {
  title: string
  description: string
  url: string
}

export default function SubstackEmbed({ title, description, url }: SubstackEmbedProps) {
  useEffect(() => {
    // Load Substack embed script if not already loaded
    if (!document.querySelector('script[src="https://substack.com/embedjs/embed.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://substack.com/embedjs/embed.js'
      script.async = true
      script.charset = 'utf-8'
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div className={styles.substackEmbed}>
      <div className="substack-post-embed">
        <p lang="en">{title}</p>
        <p>{description}</p>
        <a data-post-link href={url}>Read on Substack</a>
      </div>
    </div>
  )
} 