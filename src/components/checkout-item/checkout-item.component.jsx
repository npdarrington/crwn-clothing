import React from 'react';
import { connect } from 'react-redux';

import {
	clearItemFromCart,
	addItem,
	removeItem,
} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<article className='checkout-item'>
			<section className='image-container'>
				<img src={imageUrl} alt='item' />
			</section>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<article className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</article>
				<span className='value'>{quantity}</span>
				<article className='arrow' onClick={() => addItem(cartItem)}>&#10095;</article>
			</span>
			<span className='price'>{price}</span>
			<section className='remove-button' onClick={() => clearItem(cartItem)}>
				&#10005;
			</section>
		</article>
	);
};

const mapDispatchToProps = dispatch => ({
	clearItem: item => dispatch(clearItemFromCart(item)),
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
