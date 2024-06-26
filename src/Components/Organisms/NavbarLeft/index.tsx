import { useContext, useState } from 'react';
import { MabetIcon } from '../../Atoms/MabetIcons';
import { Wrapper } from './wrapper';
import { MabetHomeGlobalContext } from '../../../Context/GlobalContext';

export const NavbarLeft = () => {
  const [showLivingRooms, setShowLivingRooms] = useState(false);
  const [showBedRooms, setShowBedRooms] = useState(false);
  const { openLeftBar, setOpenLeftBar } = useContext(MabetHomeGlobalContext)!;
  return (
    <Wrapper className={`text-base ${openLeftBar ? 'block' : 'hidden'}`}>
      <div
        className=' left-bar-sign-in'
        onClick={() => setOpenLeftBar((prev: boolean) => !prev)}
      >
        <MabetIcon type='profileicon' classValues='h-14 w-14' />
        <p>Sebastian Murillo Betancur </p>
      </div>

      <ul className='lef-bar-options-container pt-2'>
        <li className=' hover:cursor-pointer'>
          <div
            className='left-bar-title-container flex items-center gap-2'
            onClick={() => setShowLivingRooms((prev: boolean) => !prev)}
          >
            <p className='font-semibold'>Salas </p>
            <MabetIcon type='arrowdown' classValues='h-5 w-5' />
          </div>

          {showLivingRooms && (
            <ul className='flex flex-col pl-5 '>
              <li>Juego de Sala</li>
              <li>Sala en L</li>
              <li>Sofás</li>
              <li>Sofá Cama</li>
              <li>Sofá Combo</li>
              <li>Sillas y Poltronas</li>
              <li>Mesas de Centro</li>
            </ul>
          )}
        </li>
        <li className=' hover:cursor-pointer'>
          <div
            className='left-bar-title-container flex items-center gap-2'
            onClick={() => setShowBedRooms((prev: boolean) => !prev)}
          >
            <p className='font-semibold'>Dormitorios </p>
            <MabetIcon type='arrowdown' classValues='h-5 w-5' />
          </div>
          {showBedRooms && (
            <ul className='flex flex-col pl-5'>
              <li>Juego de Sala</li>
              <li>Sala en L</li>
              <li>Sofás</li>
              <li>Sofá Cama</li>
              <li>Sofá Combo</li>
              <li>Sillas y Poltronas</li>
              <li>Mesas de Centro</li>
            </ul>
          )}
        </li>
        <li className=' hover:cursor-pointer'>
          <div className='left-bar-title-container flex items-center gap-2'>
            <p className='font-semibold'>Envios </p>
          </div>
        </li>
        <li className=' hover:cursor-pointer'>
          <div className='left-bar-title-container flex items-center gap-2'>
            <p className='font-semibold'>Catalogo de Telas </p>
          </div>
        </li>
        <li className=' hover:cursor-pointer'>
          <div className='left-bar-title-container flex items-center gap-2'>
            <p className='font-semibold'>Google Reviews </p>
          </div>
        </li>
        <li className=' hover:cursor-pointer'>
          <div className='left-bar-title-container flex items-center gap-2'>
            <p className='font-semibold'>Redes Sociales </p>
          </div>
        </li>
      </ul>
    </Wrapper>
  );
};
