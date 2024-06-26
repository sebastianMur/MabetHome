import { Wrapper } from './wrapper';
import { IDropdown, IItem } from '../../Molecules/Dropdown';
import { DropdownCategories } from '../DropdownCategories';
// import { MabetIcon } from '../MabetIcons';

const CategoriaSalas: IItem[] = [
  {
    id: 1,
    nombre: 'Juegos de Sala',
  },
  {
    id: 2,
    nombre: 'Salas en L',
  },
  {
    id: 3,
    nombre: 'Sofás',
  },
  {
    id: 4,
    nombre: 'Sofá Camas',
  },
  {
    id: 5,
    nombre: 'Sofás en combo',
  },
  {
    id: 6,
    nombre: 'Sillas y Poltronas',
  },
  {
    id: 7,
    nombre: 'Mesas de centro',
  },
];

const CategoriaDormitorios: IItem[] = [
  {
    id: 1,
    nombre: 'Base Camas',
  },
  {
    id: 2,
    nombre: 'Cabezeros',
  },
  {
    id: 3,
    nombre: 'Cama Nidos',
  },
  {
    id: 4,
    nombre: 'Colchones',
  },
  {
    id: 5,
    nombre: 'Combo Con Colchon',
  },
  {
    id: 6,
    nombre: 'Combos sin colchon',
  },
  {
    id: 7,
    nombre: 'Puff Baul',
  },
];

const Categories: IDropdown[] = [
  {
    id: 1,
    title: 'Salas',
    toLink: '#',
    description: 'Description',
    items: CategoriaSalas,
  },

  {
    id: 2,
    title: 'Dormitorios',
    toLink: '#',
    description: '',
    items: CategoriaDormitorios,
  },
];

export const NavbarBottom = () => {
  return (
    <Wrapper>{<DropdownCategories dropdownCategories={Categories} />}</Wrapper>
  );
};
