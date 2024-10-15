import {UilApps, UilEstate, UilMoon, UilScenery, UilSun, UilTimes, UilUser} from "@iconscout/react-unicons";
import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import styles from "../styles/Navbar.module.css";

// Link Items
const ITEMS = [
  {
    name: "Home",
    icon: <UilEstate className={`${styles.nav__icon}`} />,
    link: "/",
  },
  {
    name: "About",
    icon: <UilUser className={`${styles.nav__icon}`} />,
    link: "/about",
  },
  {
    name: "Portfolio",
    icon: <UilScenery className={`${styles.nav__icon}`} />,
    link: "/portfolio",
  },
];

const Navbar = () => {
  // Menu State
  const [showMenu, setShowMenu] = useState(false);
  // Handle Show menu
  const toggleMenu = () => {
    // console.log('fired')
    setShowMenu(!showMenu);
  };

  // Get the current path name for active-link in navbar
  const router = useRouter();
  const path = router.pathname;

  // DARK / LIGHT MODE STATE
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("dark-mode");
    if (storedMode === "true") {
      document.body.classList.add("dark-theme");
      setDarkMode(!darkMode);
    }
    return () => {
      document.body.classList.add("dark-theme");
    };
  }, []);

  // Handle light / dark mode toggle
  const changeMode = () => {
    if (!darkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    // Change state
    setDarkMode(!darkMode);
    // Store the mode in local storage
    localStorage.setItem("dark-mode", !darkMode);
  };

  return (
    <header className="header">
      <nav className={`${styles.nav} container`}>
        <Link href="/">
          <a className={styles.nav__logo}>
            Louis<span className={styles.nav__cursor}>|</span>
          </a>
        </Link>
        {/* Menu */}
        <div className={`${styles.nav__menu} ` + (showMenu === true ? `${styles.show__menu}` : "")} id="nav-menu">
          <ul className={`${styles.nav__list} grid`}>
            {/* Nav item with active link */}
            {ITEMS.map((item, index) => (
              <li className="nav__item" key={index}>
                <Link href={item.link}>
                  <a className={`${styles.nav__link} ` + (path === item.link ? `${styles.active__link}` : "")} onClick={toggleMenu}>
                    {item.icon}
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          {/* Close Icon */}
          <UilTimes className={styles.nav__close} onClick={toggleMenu} />
        </div>
        {/* Nav buttons */}
        <div className={styles.nav__btns}>
          <div>{darkMode ? <UilSun className={styles.change__theme} size={32} onClick={changeMode} /> : <UilMoon className={styles.change__theme} size={32} onClick={changeMode} />}</div>

          {/* Toggle Menu */}
          <div className={styles.nav__toggle}>
            <UilApps onClick={toggleMenu} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
