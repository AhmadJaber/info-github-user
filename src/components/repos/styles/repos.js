import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  box-sizing: border-box;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  .chart__wrapper {
    width: 100%;
    background-color: #282a2e;
    padding: 1.4rem;
    border-radius: 4px;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    border: 1px solid rgba(72, 72, 72, 0.17);
  }

  /* div {
    width: 100% !important;
  } */

  /* .fusioncharts-container {
    width: 100% !important;
  } */

  /* svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  } */
`;
