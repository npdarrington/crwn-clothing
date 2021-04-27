import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
	selectCartItems,
	selectCartTotal,
} from '../../redux/cart/cart.selectors';

import {
	CheckoutPageContainer,
	CheckoutHeaderContainer,
	CheckoutTotalContainer,
	CheckoutPayTestContainer,
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
	<CheckoutPageContainer>
		<CheckoutHeaderContainer>
			<article>
				<span>Product</span>
			</article>
			<article>
				<span>Description</span>
			</article>
			<article>
				<span>Quantity</span>
			</article>
			<article>
				<span>Price</span>
			</article>
			<article>
				<span>Remove</span>
			</article>
		</CheckoutHeaderContainer>
		{cartItems.map(cartItem => (
			<CheckoutItem key={cartItem.id} cartItem={cartItem} />
		))}
		<CheckoutTotalContainer>
			<span>TOTAL: ${total}</span>
		</CheckoutTotalContainer>
		<CheckoutPayTestContainer>
			*Please use the following test credit card for payments*
			<br />
			4242 4242 4242 4242 - Exp: 12/21 - CVV: 123
		</CheckoutPayTestContainer>
		<StripeCheckoutButton price={total} />
	</CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
	total: selectCartTotal,
	cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckoutPage);
