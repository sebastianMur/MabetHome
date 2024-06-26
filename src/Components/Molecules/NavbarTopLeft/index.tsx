import { ReactNode } from 'react';
import { Wrapper } from './wrapper';

type props = {
  logo: ReactNode;
  textualButton?: ReactNode;
  hamburger?: ReactNode;
};

export const NavbarTopLeft = ({ logo, textualButton, hamburger }: props) => {
  return (
    <Wrapper className=''>
      {hamburger}
      {logo}
      {textualButton}
    </Wrapper>
  );
};
