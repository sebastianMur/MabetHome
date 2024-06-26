import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100dvh;
  min-width: 28rem;
  max-width: 90%;
  background-color: #fafafa;
  p,
  div,
  li {
    font-size: 1.6rem;
  }

  .left-bar-sign-in {
    display: flex;
    align-items: center;
    justify-content: start;
    background-color: var(-third);
    color: white;
    padding: 0.5rem;
    max-height: 6.8rem;
    gap: 0.5rem;
  }

  .lef-bar-options-container {
    padding-left: 0.8rem;

    li .left-bar-title-container {
      min-height: 3.5rem;
    }
  }
`;
