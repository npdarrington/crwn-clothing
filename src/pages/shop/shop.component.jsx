import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const ShopPage = ({ collections }) => {
	return (
		<section className='shop-page'>
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</section>
	);
};

export default ShopPage;
