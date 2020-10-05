import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
	<article className='cart-dropdown'>
		<section className='cart-items'>
			{cartItems.map(cartItem => (
				<CartItem key={cartItem.id} item={cartItem} />
			))}
		</section>
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</article>
);

const mapStateToProps = state => ({
	cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
