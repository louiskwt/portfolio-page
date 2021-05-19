import React from 'react';
import Head from 'next/head';
import styles from '../../styles/Project.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
	const res = await fetch(
		'https://api.jsonbin.io/b/60a4d4dff350373e7857423a',
		{
			headers: {
				'secret-key': process.env.API_KEY,
				'Content-Type': 'application/json'
			}
		}
	);
	const data = await res.json();

	return {
		props: { projects: data }
	};
};

const Projects = ({ projects }) => {
	return (
		<>
			<Head>
				<meta name='keywords' content='Louis Tsang' />
				<title>My Page | Projects</title>
			</Head>
			<div>
				<h1>Project List</h1>
				{projects.map((project) => (
					<Link href={project.link} key={project.id}>
						<a className={styles.single}>
							<h3>{project.title}</h3>
							<p>{project.description}</p>
						</a>
					</Link>
				))}
			</div>
		</>
	);
};

export default Projects;
