import { useEffect, useState } from 'react';
import useLoadApi from './useLoadApi';

const usePokemon = (pokemonName = '') => {
  const [data, setData] = useState();
  const { response, error, isLoading } = useLoadApi({
    url: `/pokemon/${pokemonName}`,
    method: 'get',
  });
  useEffect(() => {
    if (!pokemonName) return;
    setData(response);
  }, [pokemonName, response]);
  return { data, error, isLoading };
};
export default usePokemon;
