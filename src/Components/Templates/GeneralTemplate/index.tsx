import { ReactNode } from 'react';
import { Wrapper } from './wrapper';

type props = {
  children: ReactNode;
};
export const Layout = ({ children }: props) => {
  return (
    <Wrapper>
      <div className='layout-container '>{children}</div>
    </Wrapper>
  );
};
