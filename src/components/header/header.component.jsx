import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const Header = ({ currentUser }) => {
  return (
    <div className="d-flex justify-content-between mt-2">
      <Link className="p-4" to="/">
        <Logo />
      </Link>
      <div className="d-flex align-items-center">
        <Link className="p-3 fs-4" to="/shop">
          SHOP
        </Link>
        {currentUser ? (
          <Link className="p-3 fs-4" to="/" onClick={() => auth.signOut()}>
            SIGN OUT
          </Link>
        ) : (
          <Link className="p-3 fs-4" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
