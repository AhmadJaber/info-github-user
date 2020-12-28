import React from "react";
import styled from "styled-components/macro";
import { useAuth0 } from "@auth0/auth0-react";
import loginImg from "../images/login-img-two.svg";
import demoImg from "../images/demo.png";

export default function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <Wrapper>
        <div className="container">
          <img src={loginImg} alt="loginimage" />
          <h1>github user</h1>
          <h3>search for detailed information of a github user</h3>
          <button className="btn" onClick={loginWithRedirect}>
            login
          </button>
        </div>
      </Wrapper>

      <ImageWrapper>
        <img src={demoImg} alt="appdemo" />
      </ImageWrapper>
    </>
  );
}

const ImageWrapper = styled.div`
  padding: 3rem;
  background-color: #fff;
`;

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;

  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }

  img {
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 1.25rem;
    font-size: 3.25rem;
  }

  h3 {
    font-size: 1.25rem;
    padding: 0 2rem;
    line-height: 1.2;
  }

  .btn {
    background-color: var(--clr-heading-1);
    color: var(--clr-bg-1);
    font-weight: 700;
    padding: 0.5rem 1rem;
    transition: var(--transition);

    &:hover {
      background-color: var(--clr-bg-1);
      color: var(--clr-heading-1);
    }
  }
`;
