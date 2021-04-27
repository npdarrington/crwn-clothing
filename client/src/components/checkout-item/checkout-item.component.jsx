import React from 'react';
import { connect } from 'react-redux';

import {
	clearItemFromCart,
	addItem,
	removeItem,
} from '../../redux/cart/cart.actions';

import {
	CheckoutItemContainer,
	CheckoutImageContainer,
	CheckoutItemDetailsContainer,
	CheckoutItemQuantityContainer,
	CheckoutItemArrowContainer,
	CheckoutItemValueContainer,
	CheckoutRemoveButtonContainer,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<CheckoutItemContainer>
			<CheckoutImageContainer>
				<img src={imageUrl} alt='item' />
			</CheckoutImageContainer>
			<CheckoutItemDetailsContainer>{name}</CheckoutItemDetailsContainer>
			<CheckoutItemQuantityContainer>
				<CheckoutItemArrowContainer onClick={() => removeItem(cartItem)}>
					&#10094;
				</CheckoutItemArrowContainer>
				<CheckoutItemValueContainer>{quantity}</CheckoutItemValueContainer>
				<CheckoutItemArrowContainer onClick={() => addItem(cartItem)}>
					&#10095;
				</CheckoutItemArrowContainer>
			</CheckoutItemQuantityContainer>
			<CheckoutItemDetailsContainer>{price}</CheckoutItemDetailsContainer>
			<CheckoutRemoveButtonContainer onClick={() => clearItem(cartItem)}>
				&#10005;
			</CheckoutRemoveButtonContainer>
		</CheckoutItemContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	clearItem: item => dispatch(clearItemFromCart(item)),
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
