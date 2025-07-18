
import { useContext } from 'react';
import { FilterContext } from './FilterContext';

export const useFilter = () => {
  return useContext(FilterContext);
};
