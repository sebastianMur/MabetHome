import { MabetIcon } from '../MabetIcons';
import { Wrapper } from './wrapper';

export const Card = () => {
  return (
    <Wrapper className='cart-atom sign-in-button hover:bord cursor-pointer h-full flex items-center flex-col'>
      <MabetIcon type='shoppingcart' classValues='h-12 w-12' />
    </Wrapper>
  );
};
