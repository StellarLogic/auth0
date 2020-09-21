import React, { Fragment } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import LoginButton from "./buttons/LoginButton";
import LogoutButton from "./buttons/LogoutButton";

const Navbar = () => {
  const { isAuthenticated, user } = useAuth0();
  console.log(useAuth0());

  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user"></i>
          <span className="hide-sm"> Dashboard</span>
        </Link>
      </li>
      {user && (
        <li className="user">
          <span className="img">
            <img src={user.picture} alt="" />
          </span>
          <span className="name">Hi, {user.given_name}</span>
        </li>
      )}
      <li>
        <LogoutButton />
      </li>
    </ul>
  );

  const guestLink = (
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <LoginButton />
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>
      <Fragment>{isAuthenticated ? authLinks : guestLink}</Fragment>
    </nav>
  );
};

export default Navbar;
