import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Meta from '../components/Meta'
import { UilSignin } from '@iconscout/react-unicons'

const NotFound = () => {
	const router = useRouter();
	const [countDown, setCountDown] = useState('3')
	// Count down effect
	useEffect(() => {
		let timer1 = setInterval(() => {
			setCountDown(countDown - 1)
		}, 1000);

		let timer2 = setTimeout(() => {
			router.push('/')
		}, 3000);
	
		// Clean up timers
		return () => {
			clearTimeout(timer2)
			clearInterval(timer1)
		}
	}, []);


	return (
		<>
			<Meta title={'404 | Something went wrong'} />
			<main className='main'>
				<section className="section">
					<h2 className='section__title'>Oooops...Sorry! Something went wrong</h2>
					<sapn className='section__subtitle'>
						Click the button to go back or wait to be redirected in {countDown - 1} seconds
					</sapn>
					<div className='btn__group'>
						<Link href='/'>
							<a className="button button__flex">
								Go back  <UilSignin className="button__icon" />
							</a>
						</Link>
					</div>


				</section>
			</main>
		</>
	);
};

export default NotFound;
