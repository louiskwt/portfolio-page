import { UilEstate, UilUser, UilScenery, UilBriefcaseAlt, UilApps, UilTimes } from '@iconscout/react-unicons'
import {useState} from 'react'


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
							<a href="" className="nav__link">
								<UilEstate className="nav__icon" />
								Home
							</a>
						</li>
						<li className="nav__item">
							<a href="" className="nav__link">
								<UilUser className="nav__icon" />
								About
							</a>
						</li>
						<li className="nav__item">
							<a href="" className="nav__link">
								<UilScenery className="nav__icon" />
								Portfolio
							</a>
						</li>
						<li className="nav__item">
							<a href="" className="nav__link">
								<UilBriefcaseAlt className="nav__icon" />
								Services
							</a>
						</li>
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
