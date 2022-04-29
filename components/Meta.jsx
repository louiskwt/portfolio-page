import React from 'react';
import Head from 'next/head';

const Meta = ({ title, desc, canonical }) => {
	return (
		<Head>
			{/* ===== BASIC META INFO ===== */}
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<title>{title}</title>

			{/* ====== OPEN GRAPH META INFO ==== */}
			<meta name='description' content={desc} />
			<meta property='og:type' content='website' />
			<meta property='og:title' content={title} />
			<meta
				name='og:description'
				property='og:description'
				content={desc}
			/>
			<meta property='og:image' content='/static/og-img.png' />

			<meta name='twitter:image' content='/static/og-img.png' />

			{canonical && <link rel='canonical' href={`${canonical}`} />}
			<meta property='og:site_name' content='Proper Noun' />
			<meta property='og:url' content={`${canonical}`} />
			<meta name='twitter:card' content='summary' />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={desc} />

			{/* ====== FAVICON & OTHER ICONS ===== */}
			<link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>
			<link rel="manifest" href="/static/site.webmanifest" />
		</Head>
	);
};

export default Meta;
