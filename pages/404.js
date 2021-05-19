import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

const NotFound = () => {
	const router = useRouter();
	useEffect(() => {
		setTimeout(() => {
			router.push('/');
		}, 3000);
	}, []);
	return (
		<>
			<Head>
				<meta name='keywords' content='Louis Tsang' />
				<title>My Page | 404</title>
			</Head>
			<div className='not-found'>
				<h1>Oooops....</h1>
				<p>
					Go back to the{' '}
					<Link href='/'>
						<a> Homepage </a>
					</Link>
				</p>
			</div>
		</>
	);
};

export default NotFound;
