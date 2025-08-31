import React from 'react'
import styles from './Navigation.module.css'

export default function Navigation() {
  const navigationItems = [
    { label: 'About Me', href: '#about' },
    { label: 'Publications', href: '#publications' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Creative', href: '#creative' }
  ]

  return (
    <nav className={styles.navigation}>
      <div className={styles.navContainer}>
        <div className={styles.nameSection}>
          <h1 className={styles.name}>Yash Devarshi</h1>
        </div>
        <div className={styles.navRight}>
          <ul className={styles.navList}>
            {navigationItems.map((item) => (
              <li key={item.label} className={styles.navItem}>
                <a 
                  href={item.href} 
                  className={styles.navLink}
                  aria-label={`Navigate to ${item.label} section`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.socialLinks}>
            <a 
              href="https://x.com/yashdevarshi" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Follow me on X (Twitter)"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/yash-devarshi" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Connect with me on LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          <a 
            href="mailto:ydevarshi@gmail.com?subject=Hello%20Yash&body=Hi%20Yash,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.%0D%0A%0D%0ABest%20regards"
            className={styles.contactButton}
            aria-label="Send email to Yash Devarshi"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={styles.contactIcon}>
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  )
} 