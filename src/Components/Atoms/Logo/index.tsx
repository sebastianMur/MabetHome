import { NavLink } from 'react-router-dom';
import { Wrapper } from './wrapper';

export const MabetHomeLogo = () => {
  return (
    <Wrapper>
      <NavLink
        to={'/'}
        className='navbar-top-start-logo font-semibold  h-full cursor-pointer flex items-center'
      >
        <h2>MABET</h2>
        <h2>|</h2>
        <h2>HOME</h2>
      </NavLink>
    </Wrapper>
  );
};
