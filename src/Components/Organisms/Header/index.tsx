import { ReactNode } from 'react';
import { Wrapper } from './wrapper';

type props = {
  NavbarTop?: ReactNode;
  NavbarBottom?: ReactNode;
};

export const Header = ({ NavbarTop, NavbarBottom }: props) => {
  return (
    <Wrapper className='top-0 fixed w-full z-10'>
      <div className='navbar-top'>{NavbarTop}</div>
      <div className='navbar-bottom'>{NavbarBottom}</div>
    </Wrapper>
  );
};
