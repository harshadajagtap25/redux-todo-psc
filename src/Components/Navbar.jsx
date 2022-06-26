import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      Navbar
      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </div>
  );
}

export default Navbar;
