import React from 'react';

import CustomButton from '../custom-button/custom-button.component'

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
		<CustomButton inverted>Add to Cart</CustomButton>
	</section>
);

export default CollectionItem;
