import { UilEstate, UilUser, UilScenery, UilApps, UilTimes, UilMoon, UilSun } from '@iconscout/react-unicons'
import { useState, useEffect } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css'



const Navbar = () => {
	// Menu State
	const [showMenu, setShowMenu] = useState(false)
	// Handle Show menu
	const toggleMenu = () => {
		// console.log('fired')
		setShowMenu(!showMenu)
	}
	
	// Get the current path name for active-link in navbar
	const router = useRouter()
	const path = router.pathname

	// DARK / LIGHT MODE STATE
	const [darkMode, setDarkMode] = useState(false)

	useEffect(() => {
		const storedMode = localStorage.getItem('dark-mode');
		if(storedMode === 'true') {
			document.body.classList.add('dark-theme');
			setDarkMode(!darkMode)
		}
		return () => {
			document.body.classList.add('dark-theme');
		}
	}, [])

	// Handle light / dark mode toggle
	const changeMode = () => {
		if(!darkMode) {
			document.body.classList.add('dark-theme');
		} else {
			document.body.classList.remove('dark-theme')
		}
		// Change state
		setDarkMode(!darkMode)
		// Store the mode in local storage
		localStorage.setItem('dark-mode', !darkMode)
	}

	return (
		<header className='header'>
			<nav className={`${styles.nav} container`}>
				<Link href='/'>
					<a className="nav__logo">
						Louis T
					</a>
				</Link>
				{/* Menu */}
				<div className={`${styles.nav__menu} ` + (showMenu && `${styles.show__menu}`)} id="nav-menu">
					<ul className={`${styles.nav__list} grid`}>
						{/* Nav item with active link */}
						<li className="nav__item">
							<Link href="/" >
								<a href="" className={`${styles.nav__link} ` + (path === '/' ? `${styles.active__link}` : '' )} onClick={toggleMenu}>
									<UilEstate className={`${styles.nav__icon}`} />
									Home
								</a>
							</Link>
						</li>
						<li className="nav__item">
							<Link href="/about">
								<a href="" className={`${styles.nav__link} ` + (path === '/about' ? `${styles.active__link}` : '')} onClick={toggleMenu}>
									<UilUser className="nav__icon" />
									About
								</a>
							</Link>
						</li>
						<li className="nav__item">
							<Link href="/portfolio">
								<a href="" className={`${styles.nav__link} ` + (path === '/portfolio' ? `${styles.active__link}` : '')} onClick={toggleMenu}>
									<UilScenery className={`${styles.nav__icon}`} />
									Portfolio
								</a>
							</Link>
						</li>
		
					</ul>
					{/* Close Icon */}
					<UilTimes className={styles.nav__close} onClick={toggleMenu} />
				</div>
				{/* Nav buttons */}
				<div className={styles.nav__btns}>
					<div className={styles.nav__toggle}>
						{darkMode ? <UilSun className={styles.change__theme} onClick={changeMode} /> : <UilMoon className={styles.change__theme} onClick={changeMode} />}
					</div>
				
					{/* Toggle Menu */}
					<div className={styles.nav__toggle} >
						<UilApps onClick={toggleMenu} />
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
