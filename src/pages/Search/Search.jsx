import React from "react";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div>
      <h1>Teste</h1>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/cadastro">cadastro</Link>
        </li>
        <li>
          <Link to="/esqueci-senha">esqueci-senha</Link>
        </li>
        <li>
          <Link to="/checkout">checkout</Link>
        </li>
        <li>
          <Link to="/profile">profile</Link>
        </li>
        <li>
          <Link to="/404">404</Link>
        </li>
      </ul>
    </div>
  );
};

export default Search;
