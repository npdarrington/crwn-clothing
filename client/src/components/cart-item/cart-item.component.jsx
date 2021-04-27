import React from 'react';

import {
	CartItemContainer,
	ItemDetailsContainer,
	ItemNameContainer,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	<CartItemContainer>
		<img src={imageUrl} alt='item' />
		<ItemDetailsContainer>
			<ItemNameContainer>{name}</ItemNameContainer>
			<span>
				{quantity} x ${price}
			</span>
		</ItemDetailsContainer>
	</CartItemContainer>
);

export default CartItem;
