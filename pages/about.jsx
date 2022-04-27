import React from 'react';
import Meta from '../components/Meta';
import Image from 'next/image';
import profilePicture from '../public/images/profile.jpg'
import { UilFileDownload, UilArrowRight } from '@iconscout/react-unicons'
import Link from 'next/link';

const About = () => {
	return (
		<>
			<Meta title={'About Louis'} />
			{/* Main Container */}
			<main className="main">
				{/* About Section */}
				<section className="about section">
					{/* Section headings */}
					<h2 className="section__title">About Me</h2>
					<span className="section__subtitle">
						My Background
					</span>
					<div className="about__container container grid">
						{/* About img */}
						<div className='about__img__section'>
							<Image src={profilePicture} width={300} height={250} className="about__img" />
						</div>
						{/* About data */}
						<div className="about__data">
							{/* Self-description */}
							<p className="about__description">
								A self-taught developer, with extensive knowledge in web technologies and a growth mindset, striving to deliver high quality code that can bring joy to the end users.
							</p>
							{/* About info */}
							<div className="about__info">
								<div>
									<span className="about__info-title">
										1.5
									</span>
									<span className="about__info-name">
										Years <br/>
										experience
									</span>
								</div>
								<div>
									<span className="about__info-title">
										05
									</span>
									<span className="about__info-name">
										Projects <br/>
										Completed
									</span>
								</div>
							</div>
							{/* Buttons */}
							<div className="about__buttons">
								{/* CV Download */}
								<a download href="pdf/louis_cv.pdf" className="button button__flex">
									Download my CV <UilFileDownload className="button__icon" />
								</a>
								{/* Link to Portfolio */}
								<Link href='portfolio'>
									<span className="button button__flex button__link about__button">
										View My Work
										<UilArrowRight className="button__icon" />
									</span>
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default About;
