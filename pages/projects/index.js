import React from 'react';
import Head from 'next/head';
import styles from '../../styles/Project.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
	const res = await fetch(
		'https://api.jsonbin.io/b/60a4d4dff350373e7857423a/4',
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
				<meta
					name='description'
					content='The projects that Louis has built'
				/>
				<meta property='og:type' content='website' />
				<meta
					name='og:title'
					property='og:title'
					content='Louis Tsang | Projects'
				/>
				<meta
					name='og:description'
					property='og:description'
					content="Louis's projects"
				/>
				<meta property='og:site_name' content='Louis Tsang' />
				<link rel='icon' href='/favicon.png' />
				<link rel='canocial' href='https://louistsang.me/projects' />
				<title>Louis Tsang | Projects</title>
			</Head>
			<div>
				<h1>Project List</h1>
				{projects.map((project) => (
					<div className={styles.single} key={project.id}>
						<h3>{project.title}</h3>
						<p>{project.description}</p>
						<div className={styles.group}>
							<Link href={project.link}>
								<a className={styles.btn}>View</a>
							</Link>
							<Link href={project.repo}>
								<a className={styles.btnSecondary}>Repo</a>
							</Link>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Projects;
