import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h3>Sorry, the page you tried doesn't exists.</h3>
        <Link className="btn" to="/">
          back home
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-bg-1);
  text-align: center;
  h1 {
    font-size: 10rem;
    color: var(--clr-heading-1);
  }
  h3 {
    color: var(--clr-heading-2);
    margin-bottom: 1.5rem;
  }
`;
