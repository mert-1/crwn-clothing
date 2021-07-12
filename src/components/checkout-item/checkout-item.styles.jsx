import styled from "styled-components";

export const CheckoutItemStyle = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid darkgrey;
  padding: 1rem 0;
  align-items: center;
  font-size: 1.25rem;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 1rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled.div`
  width: 23%;
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;

  .arrow {
    cursor: pointer;
  }
  .value {
    margin: 0 0.5rem;
  }
`;

export const RemoveButton = styled.div`
  font-size: 2rem;
  padding-left: 1rem;
  cursor: pointer;
`;
