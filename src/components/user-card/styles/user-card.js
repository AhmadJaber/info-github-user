import styled from "styled-components/macro";

export const Wrapper = styled.article`
  background: var(--clr-bg-3);
  box-shadow: var(--dark-shadow-2);
  padding: 2rem;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;

  &::before {
    content: "user";
    position: absolute;
    top: -1px;
    left: 0;
    transform: translateY(-100%);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: 0.1rem;
    font-size: 1rem;
    background: #282a2e;
    color: var(--clr-heading-1);
    box-shadow: var(--dark-shadow-2);
    font-weight: 700;
    font-family: var(--ff-secondary);
    padding-bottom: 4px;
  }

  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;

    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }

    h4 {
      margin-bottom: 0.25rem;
    }

    p {
      margin-bottom: 0;
      color: #44af69;
      opacity: 0.6;
    }

    a {
      color: var(--clr-heading-1);
      border: 0;
      border-radius: 4px;
      padding: 0.25rem 0.75rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      cursor: pointer;
      background: none;
      box-shadow: inset 0 0 0 1px var(--clr-heading-1);
      position: relative;
      vertical-align: middle;
      transition: 0.5s;

      &:hover {
        color: #44af69;
      }

      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transform-origin: center;
      }

      &::before {
        border-top: 1px solid #44af69;
        border-bottom: 1px solid #44af69;
        border-radius: 4px;
        /* Shrink only width */
        transform: scale3d(0, 1, 1);
        transition: transform 0.5s;
      }

      &::after {
        border-left: 1px solid #44af69;
        border-right: 1px solid #44af69;
        border-radius: 4px;
        /* Shrink only height */
        transform: scale3d(1, 0, 1);
        transition: transform 0.5s;
      }

      &:hover::before,
      &:hover::after {
        /* Show full-size */
        transform: scale3d(1, 1, 1);
        transition: transform 0.5s;
      }
    }
  }

  .bio {
    color: var(--clr-heading-2);
    margin-bottom: 2rem;
  }

  .links {
    p,
    a {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      color: var(--clr-heading-2);

      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
        color: var(--clr-heading-1);
      }
    }
    a {
      color: #44af69;
      transition: var(--transition);

      svg {
        color: var(--clr-heading-1);
      }
      &:hover {
        color: var(--clr-heading-1);
        opacity: 1;
      }
    }
  }
`;
