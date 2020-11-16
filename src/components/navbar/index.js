import React from "react";
import { Wrapper } from "./styles/navbar";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    isLoading,
    user,
  } = useAuth0();
  console.log({ user, isAuthenticated, isLoading });

  const isUser = isAuthenticated && user;

  return (
    <Wrapper>
      {isUser && user.picture && <img src={user.picture} alt={user.name} />}
      {isUser && user.nickname && (
        <h4>
          Welcome, <strong>{user.nickname.toUpperCase()}</strong>
        </h4>
      )}

      {isUser ? (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Logout
        </button>
      ) : (
        <button onClick={loginWithRedirect}>Login</button>
      )}
    </Wrapper>
  );
}
