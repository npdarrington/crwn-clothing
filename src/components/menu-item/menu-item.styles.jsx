import styled from 'styled-components';

const displayBackgroundImage = ({ backgroundImage }) => {
  return backgroundImage;
}

const displayLargeStyle = ({ size }) => {
  return size === 'large' ? '380px' : '240px';
}

export const MenuItemContainer = styled.article`
  min-width: 30%;
  height: ${displayLargeStyle};
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

  &:hover section:first-child {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

  &:hover section:last-child {
    opacity: 0.9;
  }
`;

export const BackgroundImageContainer = styled.section`
  width: 100%;
  height: 100%;
  max-width: 550px;
  min-width: 250px;
  background-position: center;
  background-size: cover;
  background-image: url(${displayBackgroundImage});
`;

export const BackgroundContentContainer = styled.section`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  h1 {
    font-weight: bold;
    margin: 0;
    font-size: 22px;
    color: #4a4a4a;
  }

  span {
    font-weight: lighter;
    font-size: 16px;
  }
`;