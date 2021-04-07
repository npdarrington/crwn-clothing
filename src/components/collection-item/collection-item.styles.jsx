import styled from 'styled-components';

export const CollectionItemContainer = styled.section`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
`;

export const CollectionItemImage = styled.section`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;

  &:hover {
    opacity: 0.8;
  }
`;