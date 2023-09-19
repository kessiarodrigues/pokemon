import { useEffect } from 'react';
import PokemonCard from './pokemonCard';
import usePokemonList from '../hooks/usePokemonList';
import useSnackbar from '../hooks/useSnackbar';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const PokemonList = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { data, isLoading, error, getPreviousPage, getNextPage } =
    usePokemonList();

  useEffect(() => {
    if (!error) return;

    enqueueSnackbar(error.message, { variant: 'error' });
  }, [error]);

  return (
    <div className=''>
      {!isLoading && !!data ? (
        <>
          <ul className=' grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4'>
            {data.results.map((pokemon) => (
              <li key={pokemon.name}>
                <PokemonCard name={pokemon.name} url={pokemon.url} />
              </li>
            ))}
          </ul>
          <div className='mt-10 flex space-x-2 item-center justify-center'>
            <button
              onClick={getPreviousPage}
              disabled={!data.previous}
              className='p-2 border rounded-sm disabled:border-[#705c5c] border-[#ee1515]'
            >
              <ArrowLeftIcon
                width={18}
                color={!data.previous ? '#705c5c' : '#ee1515'}
                className='stroke-2 '
              />
            </button>
            <button
              onClick={getNextPage}
              disabled={!data.next}
              className='p-2 border rounded-sm border-[#ee1515]'
            >
              <ArrowRightIcon
                color={!data.next ? '#705c5c' : '#ee1515'}
                width={18}
                className='stroke-2'
              />
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default PokemonList;
