import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Head>
				<meta name='keywords' content='Louis Tsang' />
				<meta
					name='description'
					content='A personal page for Louis Tsang'
				/>
				<meta property='og:type' content='website' />
				<meta
					name='og:title'
					property='og:title'
					content='Louis Tsang | Home'
				/>
				<meta
					name='og:description'
					property='og:description'
					content='A personal page for Louis Tsang'
				/>
				<meta property='og:site_name' content='Louis Tsang' />
				<link rel='icon' href='/favicon.png' />
				<link rel='canocial' href='https://louistsang.me' />
				<title>Louis Tsang | Home</title>
			</Head>
			<div>
				<h1 className={styles.title}>Louis Tsang</h1>
				<h2>Who am I?</h2>
				<p className={styles.text}>
					A full stack web developer, specializing in JavaScript,
					NodeJS and React, but also have expereince coding in Python
					and C.
				</p>
				<h2>Current Status</h2>
				<ul className={styles.text}>
					<li>Freelancing but also working on my own projects</li>
					<li>Learning Python and everything related to React</li>
					<li>Building my online business</li>
				</ul>
				<Link href='/projects'>
					<a className={styles.btn}>See my Projects</a>
				</Link>
			</div>
		</>
	);
}
