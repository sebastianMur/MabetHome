import { NavLink } from 'react-router-dom';
import { MabetIcon } from '../MabetIcons';
import { Wrapper } from './wrapper';

export const SignIn = () => {
  return (
    <Wrapper className='signin-atom'>
      <NavLink
        to='/sign-in'
        className='sign-in-button hover:bord cursor-pointer h-full flex items-center '
      >
        <MabetIcon type='profileicon' classValues='h-12 w-12' />
      </NavLink>
    </Wrapper>
  );
};
