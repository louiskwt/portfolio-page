import React from 'react';

export const getStaticPaths = async () => {
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

	const paths = data.map((project) => {
		return {
			params: { id: project.id.toString() }
		};
	});

	return {
		paths,
		fallback: false
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch(
		'https://api.jsonbin.io/b/60a4d4dff350373e7857423a/' + id,
		{
			headers: {
				'secret-key': process.env.API_KEY,
				'Content-Type': 'application/json'
			}
		}
	);
	const data = await res.json();
	return {
		props: { project: data }
	};
};

const Details = ({ project }) => {
	console.log(project);
	return (
		<div>
			<h1>{project.title}</h1>
			<p>{project.id}</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
				quas ut voluptate atque? Error corrupti molestias dignissimos
				deleniti esse, ipsam illum quas velit, neque nesciunt iste
				provident reprehenderit consequuntur consequatur!
			</p>
		</div>
	);
};

export default Details;
