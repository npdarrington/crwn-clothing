import styled from 'styled-components';

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