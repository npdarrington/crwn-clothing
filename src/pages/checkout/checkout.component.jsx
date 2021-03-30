import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

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
		{cartItems.map(cartItem => (
			<CheckoutItem key={cartItem.id} cartItem={cartItem} />
		))}
		<article className='total'>
			<span>TOTAL: ${total}</span>
		</article>
		<div className="test-warning">
			*Please use the following test credit card for payments*
			<br />
			4242 4242 4242 4242 - Exp: 12/21 - CVV: 123
		</div>
		<StripeCheckoutButton price={total} />
	</section>
);

const mapStateToProps = createStructuredSelector({
	total: selectCartTotal,
	cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckoutPage);
