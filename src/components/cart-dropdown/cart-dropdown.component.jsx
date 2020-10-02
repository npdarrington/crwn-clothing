import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
	<article className='cart-dropdown'>
		<section className='cart-items'></section>
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</article>
);

export default CartDropdown;
