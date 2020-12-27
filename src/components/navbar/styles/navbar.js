import styled from "styled-components/macro";

export const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-bg-2);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }

  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }

  button {
    border-radius: 5px;
    background: var(--clr-bg-3);
    padding: 0.25rem 0.5rem;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-heading-1);
    transition: var(--transition);
    cursor: pointer;
    &:hover {
      background: var(--clr-bg-1);
      color: var(--clr-heading-1);
    }
  }
`;
