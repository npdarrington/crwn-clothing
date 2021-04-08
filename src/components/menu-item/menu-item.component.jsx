import React from 'react';
import { withRouter } from 'react-router-dom';

import {
	MenuItemContainer,
	BackgroundImageContainer,
	BackgroundContentContainer,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
	<MenuItemContainer
		size={size}
		onClick={() => history.push(`${match.url}${linkUrl}`)}>
		<BackgroundImageContainer
			backgroundImage={imageUrl}></BackgroundImageContainer>
		<BackgroundContentContainer>
			<h1>{title.toUpperCase()}</h1>
			<span>SHOP NOW</span>
		</BackgroundContentContainer>
	</MenuItemContainer>
);

export default withRouter(MenuItem);
