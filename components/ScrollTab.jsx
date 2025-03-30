import React, {useState, useEffect} from 'react'
import { UilArrowUp } from '@iconscout/react-unicons'
import styles from '../styles/utils.module.css'

const ScrollTab = () => {
    const [scrollPosition, setScrollPosition] = useState(0)
    // an event listener to track and change scroll position
    const trackScrollPos = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    }

    // Get the scroll Y position from window
    useEffect(() => {
        window.addEventListener("scroll", trackScrollPos);

        return () => {
            window,removeEventListener("scroll", trackScrollPos)
        }
    }, [])

    return (
        // Showoing the scroll tab based on scroll position
        <a href='#top' className={`${styles.scrollup} ${(scrollPosition > 100 && styles.show__scroll)}`}>
            <UilArrowUp className={styles.scrollup__icon}  />
        </a>
    );
}

export default ScrollTab