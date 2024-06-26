import styled from 'styled-components';
import { device } from '../../../Utils/MobileSize';

export const Wrapper = styled.footer`
  width: 100%;

  .footer-container {
    display: flex;
    flex-direction: column;

    /* grid */
    .footer-top {
      width: 100%;
      display: flex;
      justify-content: center;

      .footer-top-container {
        display: grid;
        gap: 0.8rem;
        padding: 1.12rem;

        .footer-top-communication .communication-buttons {
          max-height: 30rem;
          .sales {
            background-color: rgb(34 197 94);
          }
          .pqrs {
            background-color: #f0a700;
          }
          .send-email {
            background-color: #34549b;
          }
        }

        @media ${device.mobileL} {
          grid-template-columns: 1fr 1fr;
        }

        @media ${device.laptop} {
          grid-template-columns: 1fr 1fr 1fr 1fr;
          .footer-top-about-us {
            order: 1;
          }
          .footer-top-communication {
            order: 4;
          }
          .footer-top-account {
            order: 3;
          }
          .footer-top-information {
            order: 2;
          }
        }
      }
    }

    .footer-bottom {
      background-color: var(--primary-5);
      display: flex;
      justify-content: center;

      .footer-bottom-container {
        max-width: 150rem;
        color: var(--primary-1);
        min-height: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media ${device.desktop}, ${device.desktopL}, ${device.tablet} {
          flex-direction: row;
          justify-content: space-between;
          max-width: 150rem;
          width: 100%;
        }

        .footer-top-col {
          display: flex;
          flex-direction: column;
          gap: 0.48rem;
          align-items: center;
          height: 100%;
          width: 100%;
          max-width: 33.3%;
          justify-content: center;

          .credit-cards-2 {
            display: flex;
            gap: 0.64rem;
            span {
              background-color: #1a1a1a;
              border-radius: 0.32rem /* 2px */;
              padding: 0.16rem;
              svg {
                fill: #abb8c3;
                &:hover {
                  fill: #fafafa;
                }
              }
            }
          }
        }
      }
    }
  }
`;
