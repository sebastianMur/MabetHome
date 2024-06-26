import { NavLink } from 'react-router-dom';
import { MabetIcon } from '../../Atoms/MabetIcons';
import { Wrapper } from './wrapper';
import { useState } from 'react';

export interface IItem {
  id: number;
  nombre: string;
}
export interface IDropdown {
  id: number;
  title: string;
  description: string;
  toLink: string;
  items: IItem[];
}

type props = {
  dropdownInfo: IDropdown;
};

export const Dropdown = ({ dropdownInfo }: props) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <Wrapper className=' dropdown-atom z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'>
      <span
        key={dropdownInfo.id}
        className='category'
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
      >
        <NavLink to={`${dropdownInfo.toLink}`} className='flex items-center '>
          <p>{dropdownInfo.title}</p>

          <MabetIcon
            type='arrowdown'
            classValues='pl-1 h-5 w-5 relative bottom-2/3 top:2/3'
          />
        </NavLink>

        {dropdown && (
          <ul className='items py-2 relative'>
            {dropdownInfo.items.map((item: IItem) => (
              <li>
                <a href='#' className='block px-4 py-2  dark:hover:bg-gray-600'>
                  {item.nombre}
                </a>
              </li>
            ))}
          </ul>
        )}
      </span>
    </Wrapper>
  );
};
