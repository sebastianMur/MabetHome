import { Dropdown, IDropdown } from '../../Molecules/Dropdown';

type props = {
  dropdownCategories: IDropdown[];
};

export const DropdownCategories = ({ dropdownCategories }: props) => {
  return (
    <>
      {dropdownCategories.map((category: IDropdown) => (
        <Dropdown dropdownInfo={category} />
      ))}
    </>
  );
};
