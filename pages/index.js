import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Head>
				<meta name='keywords' content='Louis Tsang' />
				<link rel='icon' href='/favicon.png' />
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
					<li>Freelancing but alsoLooking for web development job</li>
					<li>
						Learning NextJS and other technologies related to the
						React ecosystem
					</li>
					<li>Building a vocabulary learning web application</li>
				</ul>
				<Link href='/projects'>
					<a className={styles.btn}>See my Projects</a>
				</Link>
			</div>
		</>
	);
}
