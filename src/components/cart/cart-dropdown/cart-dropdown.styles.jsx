import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  border: 1px solid black;
  background-color: white;
  z-index: 5;
`;

export const CartElements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartItems = styled.div`
  max-height: 20rem;
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin-bottom: 1rem;
`;
