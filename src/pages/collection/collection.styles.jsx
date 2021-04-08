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

  & > section {
    margin-bottom: 30px;
  }
`;