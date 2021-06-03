import React from 'react';
import Head from 'next/head';

const About = () => {
	return (
		<>
			<Head>
				<meta name='keywords' content='Louis Tsang' />
				<meta name='description' content='The story about Louis' />
				<meta property='og:type' content='website' />
				<meta
					name='og:title'
					property='og:title'
					content='Louis Tsang | About'
				/>
				<meta
					name='og:description'
					property='og:description'
					content='The story about Louis'
				/>
				<meta property='og:site_name' content='Louis Tsang' />
				<link rel='icon' href='/favicon.png' />
				<link rel='canocial' href='https://louistsang.me/about' />
				<title>Louis Tsang | About</title>
			</Head>
			<div>
				<h1>My Story</h1>
				<p>
					Hi, there! I am a self-taught web developer who is fluent in
					JavaScript and has experience writing Python script. I grew
					up in Hong Kong and attended university in the United
					States, majoring in English Education. Upon my graduation,
					I’ve worked as an Engish tutor in two different local
					education companies.
				</p>
				<hr />
				<p>
					While working as an English tutor, I learned that it is
					possible to improve my teaching and solve some of my
					students' problems through technology, and that discovery
					led me to start learning how to code. So, I learned how to
					develop web applications by using online resources and
					taking onlince courses.
				</p>
				<hr />
				<p>
					In May 2021, I made the decision to make a career change and
					started freelancing as a web developer. As a self-taught
					programmer, I'm used to quickly picking up new languages and
					technologies, and I'm eager to learn continuously. Despite
					my lack of a formal degree in Computer Science, I have taken
					several programming courses online which helps me understand
					the fundamental of computer science and the importance of
					correctness and design in code.
				</p>
			</div>
		</>
	);
};

export default About;
