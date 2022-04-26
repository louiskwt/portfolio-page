import React from 'react';
import Head from 'next/head';

const Meta = ({ title, desc, canonical, img }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name='description' content={desc} />
			<meta property='og:type' content='website' />
			<meta property='og:title' content={title} />
			<meta
				name='og:description'
				property='og:description'
				content={desc}
			/>
			<meta property='og:site_name' content='Proper Noun' />
			<meta property='og:url' content={`${canonical}`} />
			<meta name='twitter:card' content='summary' />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={desc} />
			<link
				rel='icon'
				type='image/png'
				href='/static/images/favicon.ico'
			/>
			<link rel='apple-touch-icon' href='/static/images/favicon.ico' />

			{img ? (
				<meta property='og:image' content={`${img}`} />
			) : (
				<meta
					property='og:image'
					content='https://www.propernoun.co/static/images/proper-noun-social.png'
				/>
			)}
			{img && <meta name='twitter:image' content={`${img}`} />}
			{canonical && <link rel='canonical' href={`${canonical}`} />}
		</Head>
	);
};

export default Meta;
