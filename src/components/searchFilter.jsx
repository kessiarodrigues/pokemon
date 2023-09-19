import { useSetRecoilState } from 'recoil';
import { searchFilter } from '../store/atoms';
import { debounce } from 'lodash';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
const SearchFilter = () => {
  const setSearchFilter = useSetRecoilState(searchFilter);

  const handleSearch = debounce((e) => {
    setSearchFilter(e.target.value);
  }, 1500);

  return (
    <label className='flex pl-5 py-1 rounded-sm shadow-md justify-between bg-white'>
      <input
        onChange={handleSearch}
        id='name'
        type='text'
        className='w-full'
        placeholder='Digite o nome do pokemon'
      />
      <MagnifyingGlassIcon width={24} />
    </label>
  );
};

export default SearchFilter;
