import styled from 'styled-components';
import { device } from '../../../Utils/MobileSize';

export const Wrapper = styled.div`
  min-height: 33rem;
  width: 100%;

  .image-container {
    min-height: 33rem;
  }

  @media ${device.tablet} {
    min-height: 45.785rem;

    .image-container {
      min-height: 45.785rem;
    }
  }
`;
