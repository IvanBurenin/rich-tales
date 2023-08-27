'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import Navigation from './Navigation/Navigation'

import styles from './Header.module.css'
import mainStyles from '../../main.module.css'

export default function Header(){
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        if (!scrolled) {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (!scrolled) {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return(
        <header className={styles.header} style={{ backgroundColor: scrolled || pathname != '/' ? '#0B0B0B' : 'transparent'  }}>
            <div className={mainStyles.container}>
                <nav className={styles.nav}>
                    <div className={styles.left}>
                        <Navigation/>
                    </div>
                    <img className={`${styles.logo} ${scrolled || pathname != '/' ? styles.logoScrolled : ''}`} src="./rich-tales/home-images/logo.svg" alt="" />
                    <div className={styles.right}>
                        <Link href='/favorites'>
                            <svg className={styles.headerIcon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10.1 16.375L10 16.475L9.89 16.375C5.14 12.065 2 9.215 2 6.325C2 4.325 3.5 2.825 5.5 2.825C7.04 2.825 8.54 3.825 9.07 5.185H10.93C11.46 3.825 12.96 2.825 14.5 2.825C16.5 2.825 18 4.325 18 6.325C18 9.215 14.86 12.065 10.1 16.375ZM14.5 0.824997C12.76 0.824997 11.09 1.635 10 2.905C8.91 1.635 7.24 0.824997 5.5 0.824997C2.42 0.824997 0 3.235 0 6.325C0 10.095 3.4 13.185 8.55 17.855L10 19.175L11.45 17.855C16.6 13.185 20 10.095 20 6.325C20 3.235 17.58 0.824997 14.5 0.824997Z" fill="white"/>
                            </svg>
                        </Link>
                        <Link href='/cart'>
                            <svg className={styles.headerIcon} xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                                <path d="M21.4216 5.38775H16.6863V5.16327C16.6863 3.79388 16.1399 2.48059 15.1673 1.51229C14.1946 0.543985 12.8755 0 11.5 0C10.1245 0 8.80537 0.543985 7.83275 1.51229C6.86014 2.48059 6.31373 3.79388 6.31373 5.16327V5.38775H1.57843C1.15981 5.38775 0.758325 5.55332 0.462312 5.84802C0.166299 6.14272 0 6.54241 0 6.95918V20.4286C0 20.8453 0.166299 21.245 0.462312 21.5397C0.758325 21.8344 1.15981 22 1.57843 22H21.4216C21.8402 22 22.2417 21.8344 22.5377 21.5397C22.8337 21.245 23 20.8453 23 20.4286V6.95918C23 6.54241 22.8337 6.14272 22.5377 5.84802C22.2417 5.55332 21.8402 5.38775 21.4216 5.38775ZM7.66667 5.16327C7.66667 4.15111 8.07053 3.18042 8.78942 2.46472C9.50831 1.74901 10.4833 1.34694 11.5 1.34694C12.5167 1.34694 13.4917 1.74901 14.2106 2.46472C14.9295 3.18042 15.3333 4.15111 15.3333 5.16327V5.38775H7.66667V5.16327ZM21.6471 20.4286C21.6471 20.4881 21.6233 20.5452 21.581 20.5873C21.5387 20.6294 21.4814 20.6531 21.4216 20.6531H1.57843C1.51863 20.6531 1.46127 20.6294 1.41899 20.5873C1.3767 20.5452 1.35294 20.4881 1.35294 20.4286V6.95918C1.35294 6.89965 1.3767 6.84255 1.41899 6.80045C1.46127 6.75835 1.51863 6.73469 1.57843 6.73469H6.31373V8.7551C6.31373 8.93372 6.385 9.10502 6.51186 9.23132C6.63872 9.35762 6.81078 9.42857 6.9902 9.42857C7.16961 9.42857 7.34167 9.35762 7.46853 9.23132C7.5954 9.10502 7.66667 8.93372 7.66667 8.7551V6.73469H15.3333V8.7551C15.3333 8.93372 15.4046 9.10502 15.5315 9.23132C15.6583 9.35762 15.8304 9.42857 16.0098 9.42857C16.1892 9.42857 16.3613 9.35762 16.4881 9.23132C16.615 9.10502 16.6863 8.93372 16.6863 8.7551V6.73469H21.4216C21.4814 6.73469 21.5387 6.75835 21.581 6.80045C21.6233 6.84255 21.6471 6.89965 21.6471 6.95918V20.4286Z" fill="#F3F3F3"/>
                            </svg>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}