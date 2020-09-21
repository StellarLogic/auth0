import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const LoginButton = () => {
  const { logout } = useAuth0();
  console.log(logout);

  return (
    <Button
      onClick={() => logout()}
      id="loginBtn"
      className="btn-margin"
      variant="danger"
    >
      Logout
    </Button>
  );
};

export default LoginButton;
