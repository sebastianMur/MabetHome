import { ReactNode } from 'react';
import { Wrapper } from './wrapper';

type props = {
  card: ReactNode;
  signIn?: ReactNode;
};

export const NavbarTopRight = ({ card, signIn }: props) => {
  return (
    <Wrapper className='navbartoprigh-molecule'>
      {card}
      {signIn}
    </Wrapper>
  );
};
