import React from "react";

const Navbar = ({ totalCounter }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="null">
        Navbar{" "}
        <span className="badge badge-pills badge-secondary">
          {totalCounter}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
