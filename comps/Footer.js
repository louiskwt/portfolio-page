import Link from 'next/link';
import React from 'react';
import { FaWhatsapp, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer>
			<div className='social-links'>
				<Link href='https://wa.me/85263520220?text=Hi,I%20want%20to%20have%20a%20chat%20with%20you.'>
					<a>
						<FaWhatsapp size={56} />
					</a>
				</Link>
				<Link href='https://www.facebook.com/louis.tsang.733/'>
					<a>
						<FaFacebook size={56} />
					</a>
				</Link>
				<Link href='https://www.linkedin.com/in/ka-wing-tsang-689344153/'>
					<a>
						<FaLinkedin size={56} />
					</a>
				</Link>
				<Link href='https://github.com/louiskwt'>
					<a>
						<FaGithub size={56} />
					</a>
				</Link>
			</div>
			<p>Copyright 2021 Louis Tsang</p>
		</footer>
	);
};

export default Footer;
