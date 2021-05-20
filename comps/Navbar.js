import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
	return (
		<nav>
			<div className='logo'>
				<Image src='/logo.png' width={180} height={143} />
			</div>
			<Link href='/'>
				<a>Home</a>
			</Link>
			<Link href='/about'>
				<a>About</a>
			</Link>
			<Link href='/projects'>
				<a>Projects</a>
			</Link>
		</nav>
	);
};

export default Navbar;
