import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<article className='checkout-item'>
			<section className='image-container'>
				<img src={imageUrl} alt='item' />
			</section>
			<span className='name'>{name}</span>
			<span className='quantity'>{quantity}</span>
			<span className='price'>{price}</span>
			<section className='remove-button' onClick={() => clearItem(cartItem)}>
				&#10005;
			</section>
		</article>
	);
};

const mapDispatchToProps = dispatch => ({
	clearItem: item => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
