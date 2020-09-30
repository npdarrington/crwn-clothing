import React from 'react';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
	<section className='collection-preview'>
		<h1 className='title'>{title.toUpperCase}</h1>
		<article className='preview'>
			{items
				.filter((item, index) => index < 4)
				.map(item => (
					<article key={item.id}>{item.name}</article>
				))}
		</article>
	</section>
);

export default CollectionPreview;
