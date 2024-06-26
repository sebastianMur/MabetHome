import styled from 'styled-components';
import { device } from '../../../Utils/MobileSize';

export const Wrapper = styled.div`
  margin-top: 15rem;

  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(primary-1);

  @media ${device.tablet} {
    margin-top: 10.05rem;
  }

  .layout-container {
    width: 100%;
    min-height: calc(100vh - 10.4rem);
  }
`;
