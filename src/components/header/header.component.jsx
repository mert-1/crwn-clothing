// React
import React from "react";

// Assets
import { ReactComponent as Logo } from "../../assets/crown.svg";

// Components
import CartIcon from "../cart/cart-icon/cart-icon.component";
import CartDropdown from "../cart/cart-dropdown/cart-dropdown.component";

// Reselect
import { createStructuredSelector } from "reselect";

// Redux
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <div>
      <HeaderContainer>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to="/shop">SHOP</OptionLink>
          {currentUser ? (
            <OptionLink to="/" onClick={signOutStart}>
              SIGN OUT
            </OptionLink>
          ) : (
            <OptionLink to="/signin">SIGN IN</OptionLink>
          )}
          <CartIcon />
        </OptionsContainer>
      </HeaderContainer>
      {hidden ? null : (
        <div className="d-flex justify-content-end">
          <CartDropdown />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
