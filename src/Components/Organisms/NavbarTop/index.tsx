import { Search } from '../../Molecules/Search';
import { ReactNode, useContext } from 'react';
// import { NavLink } from 'react-router-dom';
import { Wrapper } from './wrapper';
import { MabetHomeGlobalContext } from '../../../Context/GlobalContext';
import { MabetHomeLogo } from '../../Atoms/Logo';
import { NavbarTopLeft } from '../../Molecules/NavbarTopLeft';
import { Hamburger } from '../../Atoms/Hamburger';
import { NavbarTopRight } from '../../Molecules/NavbarTopRight';
import { Card } from '../../Atoms/Card';

type props = {
  Search?: ReactNode;
};

export const NavbarTop = ({ Search }: props) => {
  const { setOpenLeftBar } = useContext(MabetHomeGlobalContext)!;

  return (
    <Wrapper className='navbar-top-container'>
      <div className='navbartopleft'>
        <NavbarTopLeft
          logo={<MabetHomeLogo />}
          // textualButton={
          //   <TextualButton
          //     icon='mappin'
          //     toLink='send-to'
          //     text='Envios a'
          //     title='Colombia'
          //   />
          // }
          hamburger={<Hamburger onClickOpenLeftBar={setOpenLeftBar} />}
        />
      </div>

      <div className='navbar-top-middle h-full items-center '>
        <NavbarTopRight card={<Card />} />
      </div>
      <div className='navbar-top-end'>{Search}</div>
    </Wrapper>
  );
};

NavbarTop.Search = Search;
