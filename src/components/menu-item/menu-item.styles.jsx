import styled from 'styled-components';

const displayBackgroundImage = ({ backgroundImage }) => {
  return backgroundImage;
}

export const MenuItemContainer = styled.article`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`;

export const BackgroundImageContainer = styled.section`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: url(${displayBackgroundImage});

  &:hover {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;