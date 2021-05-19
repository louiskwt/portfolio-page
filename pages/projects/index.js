import React from 'react';
import Head from 'next/head';
import styles from '../../styles/Project.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/albums');
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
					<Link href={`/projects/${project.id}`} key={project.id}>
						<a className={styles.single}>
							<h3>{project.title}</h3>
						</a>
					</Link>
				))}
			</div>
		</>
	);
};

export default Projects;
