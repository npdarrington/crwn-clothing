import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
	selectCartItems,
	selectCartTotal,
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
	<section className='checkout-page'>
		<section className='checkout-header'>
			<article className='header-block'>
				<span>Product</span>
			</article>
			<article className='header-block'>
				<span>Description</span>
			</article>
			<article className='header-block'>
				<span>Quantity</span>
			</article>
			<article className='header-block'>
				<span>Price</span>
			</article>
			<article className='header-block'>
				<span>Remove</span>
			</article>
		</section>
		{cartItems.map(cartItem => cartItem.name)}
		<article className='total'>
			<span>TOTAL: ${total}</span>
		</article>
	</section>
);

const mapStateToProps = createStructuredSelector({
	total: selectCartTotal,
	cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckoutPage);
