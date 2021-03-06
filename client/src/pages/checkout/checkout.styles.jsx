import styled from 'styled-components';

export const CheckoutPageContainer = styled.section`
  width: 55%;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0;

  button {
    margin-left: auto;
  }
`;

export const CheckoutHeaderContainer = styled.section`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  article {
    text-transform: capitalize;
    width: 23%;

    &:last-child {
      width: 8%;
    }
  }
`;

export const CheckoutTotalContainer = styled.article`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const CheckoutPayTestContainer = styled.section`
  color: red;
  font-size: 24px;
  text-align: center;
  margin-top: 40px;
`;