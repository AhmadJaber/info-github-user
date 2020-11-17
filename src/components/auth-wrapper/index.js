import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Wrapper } from "./styles/auth-wrapper";
import loaderGif from "../../images/preloader.gif";

export default function AuthWrapper({ children }) {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <Wrapper>
        <img src={loaderGif} alt="Loading..." />
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <h3>{error.message}</h3>
      </Wrapper>
    );
  }

  return <>{children}</>;
}
