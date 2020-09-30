import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
	<section className='collection-item'>
		<section
			className='image'
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
		></section>
		<section className='collection-footer'>
			<span className='name'>{name}</span>
			<span className='price'>{price}</span>
		</section>
	</section>
);

export default CollectionItem;
