import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<section className='collection-item'>
			<section
				className='image'
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			></section>
			<section className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</section>
			<CustomButton onClick={() => addItem(item)} inverted>
				Add to Cart
			</CustomButton>
		</section>
	);
};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
