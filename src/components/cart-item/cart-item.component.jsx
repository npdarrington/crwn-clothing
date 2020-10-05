import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	<article className='cart-item'>
		<img src={imageUrl} alt='item' />
		<section className='item-details'>
			<span className='name'>{name}</span>
			<span className='price'>{quantity} x ${price}</span>
		</section>
	</article>
);

export default CartItem;
