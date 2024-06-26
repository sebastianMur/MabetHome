import styled from 'styled-components';
import { device } from '../../../Utils/MobileSize';

export const Wrapper = styled.div`
  min-width: 32rem;

  display: grid;
  grid-template-columns: repeat(2, minmax(15rem, 1fr));
  grid-template-rows: 4rem 4rem;
  column-gap: 2rem;
  justify-content: end;
  grid-template-rows: minmax(5rem, auto);
  @media ${device.tablet} {
    grid-template-columns: repeat(3, minmax(15rem, 1fr));
    grid-template-rows: 4rem;
  }

  .navbartopleft {
    grid-row: 1;
    order: 0;
  }

  .navbar-top-middle {
    grid-row: 0;
    display: flex;
    gap: 0.8rem;
    justify-content: end;
    order: 1;
    .sign-in-button,
    .cart-button {
      display: flex;
      padding-left: 0.32rem;
      padding-right: 0.32rem;
    }
  }

  .navbar-top-end {
    order: 2;
    grid-column: 1 / -1;
    grid-row: 2;
    display: flex;
    justify-content: center;
    @media ${device.tablet} {
      grid-row: 1;
      grid-column: 2;
    }
    @media ${device.laptopL} {
      flex-grow: 1;
      grid-column: 3 / -3;
      grid-row: 1;
    }
  }
`;
