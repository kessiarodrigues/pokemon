import { useState } from 'react';
import useLoadApi from './useLoadApi';

const usePokemonList = () => {
  const [url, setUrl] = useState('/pokemon');
  const { response, error, isLoading } = useLoadApi({
    method: 'get',
    url: url,
  });

  const getPreviousPage = () => {
    setUrl(response.previous);
  };

  const getNextPage = () => {
    setUrl(response.next);
  };

  return { data: response, error, isLoading, getPreviousPage, getNextPage };
};
export default usePokemonList;
