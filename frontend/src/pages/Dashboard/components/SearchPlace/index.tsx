import React, { useState } from 'react';
import { SearchIcon } from '@/components/Icons';

interface SearchPlaceProps {
  handleSearchPlace: Function;
}

const SearchPlace: React.FC<SearchPlaceProps> = ({ handleSearchPlace }) => {
  const [placeInput, setPlaceInput] = useState<string>('');
  return (
    <>
      {/* SEARCH */}
      <form
        className="mb-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearchPlace(placeInput);
        }}
      >
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon className="text-gray-500 h-4 w-4" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Vị trí trạm nước..."
            value={placeInput}
            onChange={(e) => setPlaceInput(e.target.value)}
            required={true}
          />
        </div>
      </form>
    </>
  );
};

export default SearchPlace;
