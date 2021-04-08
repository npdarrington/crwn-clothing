import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selector';

import {
	CollectionPageContainer,
	CollectionItemsContainer,
} from './collection.styles';

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<CollectionPageContainer>
			<h2>{title}</h2>
			<CollectionItemsContainer>
				{items.map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
			</CollectionItemsContainer>
		</CollectionPageContainer>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
