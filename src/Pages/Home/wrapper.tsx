import styled from 'styled-components';
import { device } from '../../Utils/MobileSize';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .furniture {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .furniture-title {
      font-weight: 700;
      text-align: center;
    }
    .furniture-message {
      text-align: center;
    }
  }
  .categories {
    display: grid;
    gap: 2rem;

    @media ${device.tablet} {
      grid-template-columns: 1fr 1fr;
      :nth-child(3),
      :nth-child(4) {
        grid-column: span 2;
      }
    }
    @media ${device.laptop} {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      :nth-child(3),
      :nth-child(4) {
        grid-column: span 2;
      }
    }
  }

  .send {
    min-height: 20rem;
    background-color: var(-fourth);
  }
`;
