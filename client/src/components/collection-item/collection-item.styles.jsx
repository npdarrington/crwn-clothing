import styled from 'styled-components';

const customWidth = elem => {
	return elem === 'name' ? 'width: 90%' : 'width: 10%';
};

const renderImage = ({ imageUrl }) => {
	return imageUrl;
};

export const CollectionItemContainer = styled.section`
	width: 22vw;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;

	@media screen and (max-width: 950px) {
		width: 29vw;
	}

	@media screen and (max-width: 700px) {
		width: 40vw;
	}

	@media screen and (max-width: 500px) {
		width: 80vw;
	}

	button {
		width: 80%;
		opacity: 0.7;
		position: absolute;
		top: 255px;

		&:hover {
			opacity: 0.85;
			display: flex;
		}
	}
`;

export const CollectionItemImageContainer = styled.section`
  width: 100%;
  height: 95%;
  background-image: url(${renderImage});
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;

  &:hover {
    opacity: 0.8;
  }
`;

export const CollectionItemFooterContainer = styled.section`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`;

export const CollectionItemNameContainer = styled.span`
	${customWidth('name')};
	margin-bottom: 15px;
`;

export const CollectionItemPriceContainer = styled.span`
	${customWidth('price')}
`;
