import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <p>Water your plants</p>
      <Link to="/login">Log in</Link>
    </div>
  );
};

export default Header;
