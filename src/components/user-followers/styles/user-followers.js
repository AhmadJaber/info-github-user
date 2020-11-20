import styled from "styled-components/macro";

export const Wrapper = styled.article`
  background: var(--clr-bg-3);
  box-shadow: var(--dark-shadow-2);
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;

  &::before {
    content: " followers";
    position: absolute;
    top: -1px;
    left: 0;
    transform: translateY(-100%);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
    background: #282a2e;
    color: var(--clr-heading-1);
    box-shadow: var(--dark-shadow-2);
    font-weight: 700;
    font-family: var(--ff-secondary);
    padding-bottom: 4px;
  }

  .followers {
    /* overflow: scroll; */
    overflow-y: scroll;
    height: 260px;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
    gap: 1.25rem 1rem;
    padding: 2rem;
    padding-bottom: 0;
  }

  .followers {
    scrollbar-width: thin;
    scrollbar-color: var(--clr-heading-1) var(--clr-bg-3);
  }

  .followers::-webkit-scrollbar {
    width: 10px;
  }

  .followers::-webkit-scrollbar-track {
    background: var(--clr-bg-3);
  }

  .followers::-webkit-scrollbar-thumb {
    background-color: var(--clr-heading-1);
    border-radius: 20px;
    border: 3px solid var(--clr-bg-3);
  }

  article {
    transition: var(--transition);
    padding: 0.15rem 0.5rem;
    border-radius: var(--radius);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1rem;

    img {
      height: 100%;
      width: 45px;
      border-radius: 50%;
      object-fit: cover;
    }

    h4 {
      font-weight: 400;
      color: var(--clr-heading-2);
      margin-bottom: 0.1rem;
    }

    a {
      color: #44af69;
      opacity: 0.7;
    }
  }
`;
