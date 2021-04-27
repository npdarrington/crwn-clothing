import styled from 'styled-components';

export const CollectionPageContainer = styled.section`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 38px;
    margin: 0 auto 30px;
  }
`;

export const CollectionItemsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  margin-bottom: 30px;

  @media screen and (max-width: 950px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  & > section {
    margin-bottom: 30px;
  }
`;