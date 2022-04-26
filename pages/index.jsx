import Meta from '../components/Meta'
import { UilLinkedinAlt, UilGithubAlt, UilTwitterAlt, UilSearchAlt } from '@iconscout/react-unicons'
import profile from '../public/profile-pic.png'
import Link from 'next/link'



export default function Home() {
	console.log(profile)
	return (
		<>
			<Meta title={'Louis Tsang | Software Engineer'} />
			<main className='main'>
				{/* Home Seciton */}
				<section className="home section" id="home">
					<div className="home__container container grid">
						{/* Social Links */}
						<div className="home__social">
							<a href="https://www.linkedin.com/in/ka-wing-tsang-689344153/"  target="_blank" className="home__social-icon">
								<UilLinkedinAlt size="40" />
							</a>
							<a href="https://github.com/louiskwt" target="_blank" className="home__social-icon">
								<UilGithubAlt size="40" />
							</a>
							<a href="https://twitter.com/kawingt2" target="_blank" className="home__social-icon">
								<UilTwitterAlt size="40" />
							</a>
						</div>
						{/* Blob Img */}
						<div className="home__img">
							<svg className="home__blob" viewBox="0 0 200 187" >
								<mask id="mask0" mask-type="alpha">
									<path
										d="M52.4,-71.8C66.6,-61.7,76.1,-44.8,82.2,-26.6C88.2,-8.4,90.7,10.9,85.5,28C80.3,45.1,67.2,59.8,51.7,69.9C36.1,80,18.1,85.4,0,85.4C-18.1,85.5,-36.3,80.2,-51.3,69.9C-66.3,59.7,-78.2,44.5,-83.1,27.4C-88,10.4,-86,-8.4,-80.3,-26.2C-74.7,-44,-65.5,-60.7,-51.5,-70.9C-37.5,-81.2,-18.7,-84.9,0.1,-85.1C19,-85.3,38.1,-82,52.4,-71.8Z"
										transform="translate(100 100)"
										 />
								</mask>
								<g mask="url(#mask0)">
									<path
										d="M52.4,-71.8C66.6,-61.7,76.1,-44.8,82.2,-26.6C88.2,-8.4,90.7,10.9,85.5,28C80.3,45.1,67.2,59.8,51.7,69.9C36.1,80,18.1,85.4,0,85.4C-18.1,85.5,-36.3,80.2,-51.3,69.9C-66.3,59.7,-78.2,44.5,-83.1,27.4C-88,10.4,-86,-8.4,-80.3,-26.2C-74.7,-44,-65.5,-60.7,-51.5,-70.9C-37.5,-81.2,-18.7,-84.9,0.1,-85.1C19,-85.3,38.1,-82,52.4,-71.8Z"
										transform="translate(100 100)"
									/>
									<image xlinkHref={profile.src} className="home__blob-img" />
								</g>
							</svg>
						</div>
						<div className="home__data">
							<h1 className="home__title">
								Hi, I'm Louis
							</h1>
							<h3>Web Developer from HK</h3>
							<p className="home__description">
								Experienced in developing modern web applications with JavaScript, React, Firebase, NodeJS, MongoDB
							</p>
							<Link href="/about">
								<a href="" className="button button__flex">
									Find out more <UilSearchAlt />
								</a>
							</Link>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
