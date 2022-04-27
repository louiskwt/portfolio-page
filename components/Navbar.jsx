import { UilEstate, UilUser, UilScenery, UilApps, UilTimes } from '@iconscout/react-unicons'
import { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';



const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false)
	// Handle Show menu
	const toggleMenu = () => {
		console.log('fired')
		setShowMenu(!showMenu)
	}
	
	// Get the current path name for active-link in navbar
	const router = useRouter()
	const path = router.pathname

	return (
		<header className='header' id="header">
			<nav className="nav container">
				<Link href='/'>
					<a className="nav__logo">
						Louis T
					</a>
				</Link>
				{/* Menu */}
				<div className={"nav__menu " + (showMenu && "show-menu")} id="nav-menu">
					<ul className="nav__list grid">
						{/* Nav item with active link */}
						<li className="nav__item">
							<Link href="/" >
								<a href="" className={"nav__link " + (path === '/' && 'active-link' )} onClick={toggleMenu}>
									<UilEstate className="nav__icon" />
									Home
								</a>
							</Link>
						</li>
						<li className="nav__item">
							<Link href="/about">
								<a href="" className={"nav__link " + (path === '/about' && 'active-link')} onClick={toggleMenu}>
									<UilUser className="nav__icon" />
									About
								</a>
							</Link>
						</li>
						<li className="nav__item">
							<Link href="/portfolio">
								<a href="" className={"nav__link " + (path === '/portfolio' && 'active-link')} onClick={toggleMenu}>
									<UilScenery className="nav__icon" />
									Portfolio
								</a>
							</Link>
						</li>
		
					</ul>
					{/* Close Icon */}
					<UilTimes className="nav__close" onClick={toggleMenu} />
				</div>
				{/* Nav buttons */}
				<div className="nav-btns">
					{/* Toggle Menu */}
					<div className="nav__toggle" id="nav-toggle">
						<UilApps onClick={toggleMenu} />
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
