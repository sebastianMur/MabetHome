import { MabetIcon } from '../../Atoms/MabetIcons';
import { Wrapper } from './Wrapper';

export const Search = () => {
  return (
    <Wrapper>
      <div className='form-container '>
        <button
          className='dropdown-button h-full flex-shrink-0 z-10  box-border inline-flex items-center py-2.5 px-4 font-medium text-center  border border-e-0 rounded-s-lg '
          type='button'
        >
          Todo
          <MabetIcon
            type='arrowdown'
            classValues=' bg-green w-2.5 h-2.5 ms-2.5'
          />
        </button>

        <div className='relative w-full'>
          <input
            type='search'
            className='block p-2.5 w-full h-full z-20 rounded-e-lg rounded-s-gray-100 rounded-s-2 border '
            placeholder='Search'
            required
          />

          <button
            type='submit'
            className='  flex justify-center items-center absolute top-0 end-0 p-2.5 h-full font-medium   rounded-e-lg border   focus:ring-4 focus:outline-none'
          >
            <MabetIcon
              type='magnifyingglass'
              classValues='w-11 h-11 fon  self-center'
            />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
