import styled from "styled-components/macro";

export const Wrapper = styled.footer`
  padding-top: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 1.5em;

  .footer__link {
    color: #44af69;
    font-weight: 700;
    font-size: 0.9rem;
    transition: color 300ms linear;

    &:hover {
      color: var(--clr-heading-1);
    }

    .emoji {
      margin-right: 0.25em;
    }
  }
`;
