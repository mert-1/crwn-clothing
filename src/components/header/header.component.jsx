import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => (
  <div className="d-flex justify-content-between">
    <Link className="p-4" to="/">
      <Logo />
    </Link>
    <div className="d-flex align-items-center">
      <Link className="p-3" to="/shop">
        SHOP
      </Link>
      <Link className="p-3" to="/contact">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
