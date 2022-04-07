import React from "react";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  let history = useHistory();
  const handleClick = () => {
    history.push("/login");
    window.location.reload(true);
  };
  const handleClick2 = () => {
    history.push("/");
    window.location.reload(true);
  };
  return (
    <div className="header">
      <Link to="/" onClick={handleClick2}>
        Water your plants
      </Link>
      <Link to="/login" onClick={handleClick}>
        Log in
      </Link>
    </div>
  );
};

export default Header;
