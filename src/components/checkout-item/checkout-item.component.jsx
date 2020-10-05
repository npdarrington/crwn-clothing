import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
	<article className='checkout-item'>
		<section className='image-container'>
			<img src={imageUrl} alt='item' />
		</section>
		<span className='name'>{name}</span>
		<span className='quantity'>{quantity}</span>
		<span className='price'>{price}</span>
		<section className='remove-button'>&#10005;</section>
	</article>
);

export default CheckoutItem;
