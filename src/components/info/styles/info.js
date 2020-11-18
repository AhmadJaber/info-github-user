import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }

  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-bg-3);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    box-shadow: var(--dark-shadow-2);

    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }

    .icon {
      font-size: 1.5rem;
    }

    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
      line-height: 35px;
      font-weight: 700;
      font-size: 30px;
      padding: 0.5rem 0 0.25rem;
    }

    p {
      margin-bottom: 0;
      text-transform: capitalize;
      color: var(--clr-heading-2);
      font-size: 14px;
      letter-spacing: 1px;
    }

    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }

    .green {
      background: var(--clr-primary-10);
      color: var(--clr-primary-5);
    }

    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }

    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;
