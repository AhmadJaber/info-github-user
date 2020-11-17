import styled from "styled-components/macro";

// TODO: tweak the scrollbar-style
export const Wrapper = styled.article`
  background: var(--clr-white);
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;

  &::before {
    content: " followers";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-white);
    color: var(--clr-grey-5);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }

  .followers {
    /* overflow: scroll; */
    overflow-y: scroll;
    height: 260px;
    display: grid;
    grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
    gap: 1.25rem 1rem;
    padding: 1rem 2rem;
  }

  .followers {
    scrollbar-width: thin;
    scrollbar-color: hsl(185, 62%, 45%) hsl(213, 32%, 89%);
  }

  .followers::-webkit-scrollbar {
    width: 12px;
  }

  .followers::-webkit-scrollbar-track {
    background: hsl(213, 32%, 89%);
  }

  .followers::-webkit-scrollbar-thumb {
    background-color: hsl(185, 62%, 45%);
    border-radius: 20px;
    border: 3px solid hsl(213, 32%, 89%);
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
      margin-bottom: 0;
    }

    a {
      color: var(--clr-grey-5);
    }
  }
`;
