import { Wrapper } from './wrapper';
import { MabetIcon } from '../../Atoms/MabetIcons';

type props = {
  onClickOpenLeftBar: (prev: (prev: boolean) => boolean) => void;
};

export const Hamburger = ({ onClickOpenLeftBar }: props) => {
  return (
    <Wrapper onClick={() => onClickOpenLeftBar((prev: boolean) => !prev)}>
      <MabetIcon
        classValues='h-11 w-11 hover:bord cursor-pointer'
        type='hamburger'
      />
    </Wrapper>
  );
};
