import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
	CollectionItemContainer,
	CollectionItemImageContainer,
	CollectionItemFooterContainer,
	CollectionItemNameContainer,
	CollectionItemPriceContainer,
} from './collection-item.styles';

import { CustomButtonContainer } from '../custom-button/custom-button.styles';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<CollectionItemContainer>
			<CollectionItemImageContainer
				imageUrl={imageUrl}></CollectionItemImageContainer>
			<CollectionItemFooterContainer>
				<CollectionItemNameContainer>{name}</CollectionItemNameContainer>
				<CollectionItemPriceContainer>{price}</CollectionItemPriceContainer>
			</CollectionItemFooterContainer>
			<CustomButtonContainer onClick={() => addItem(item)} inverted>
				Add to Cart
			</CustomButtonContainer>
		</CollectionItemContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
