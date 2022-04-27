import { UilEstate, UilUser, UilScenery, UilBriefcaseAlt, UilApps, UilTimes } from '@iconscout/react-unicons'
import { useState } from 'react'
import Link from 'next/link';


const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false)
	// Handle Show menu
	const toggleMenu = () => {
		console.log('fired')
		setShowMenu(!showMenu)
	}
	return (
		<header className='header' id="header">
			<nav className="nav container">
				<a href="#" className="nav__logo">
					Louis T
				</a>
				<div className={"nav__menu " + (showMenu && "show-menu")} id="nav-menu">
					<ul className="nav__list grid">
						<li className="nav__item">
							<Link href="/" >
								<a href="" className="nav__link" onClick={toggleMenu}>
									<UilEstate className="nav__icon" />
									Home
								</a>
							</Link>
						</li>
						<li className="nav__item">
							<Link href="/about">
								<a href="" className="nav__link" onClick={toggleMenu}>
									<UilUser className="nav__icon" />
									About
								</a>
							</Link>
						</li>
						<li className="nav__item">
							<Link href="/portfolio">
								<a href="" className="nav__link" onClick={toggleMenu}>
									<UilScenery className="nav__icon" />
									Portfolio
								</a>
							</Link>
						</li>
						{/* <li className="nav__item">
							<a href="" className="nav__link" onClick={toggleMenu}>
								<UilBriefcaseAlt className="nav__icon" />
								Services
							</a>
						</li> */}
					</ul>
					{/* Close Icon */}
					<UilTimes className="nav__close" onClick={toggleMenu} />
				</div>
				<div className="nav-btns">
					<div className="nav__toggle" id="nav-toggle">
						<UilApps onClick={toggleMenu} />
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
