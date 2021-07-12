import styled from "styled-components";
import { ReactComponent as ShoppingIconSVG } from "../../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  width: 3rem;
  height: 3rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  width: 2rem;
  height: 2rem;
`;
export const ItemCount = styled.span`
  position: absolute;
  font-size: 0.75rem;
  font-weight: bold;
  bottom: 0.75rem;
`;
