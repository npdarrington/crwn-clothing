import styled, { css } from 'styled-components';

const CheckoutItemsWidth = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.article`
  width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
`;

export const CheckoutImageContainer = styled.section`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CheckoutItemDetailsContainer = styled.span`
  ${CheckoutItemsWidth}
`;

export const CheckoutItemQuantityContainer = styled.span`
  ${CheckoutItemsWidth}
  display: flex;
`;

export const CheckoutItemArrowContainer = styled.article`
  cursor: pointer;
`;

export const CheckoutItemValueContainer = styled.span`
  margin: 0 10px;
`;

export const CheckoutRemoveButtonContainer = styled.section`
  padding-left: 12px;
  cursor: pointer;
`;