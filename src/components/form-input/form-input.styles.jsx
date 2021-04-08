import styled, { css } from 'styled-components';

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: $main-color;
`;

export const FormGroupContainer = styled.section`
  position: relative;
  margin: 45px 0;
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: grey;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabel}
  }
`;