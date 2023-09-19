import usePokemon from '../hooks/usePokemon';
import { useSetRecoilState } from 'recoil';
import { pokemonAtom, pokemonModalAtom } from '../store/atoms';

const PokemonCard = ({ name = ' ', url = '' }) => {
  const pokemonId = url.match(/\/(\d+)\/$/)[1];
  const setPokemon = useSetRecoilState(pokemonAtom);
  const setOpenPokemonModal = useSetRecoilState(pokemonModalAtom);

  const { data, isLoading } = usePokemon(pokemonId);
  const handlePokemon = () => {
    setPokemon(data);
    setOpenPokemonModal(true);
  };
  return (
    <div className='flex bg-white items-stretch h-full flex-col shadow-md space-y-3 px-4 py-2 rounded-lg min-w-[150px]'>
      {!isLoading && data ? (
        <>
          <img
            className='w-full h-full'
            loading='lazy'
            src={data.sprites.front_default}
            alt=''
          />
          <h3 className='text-md font-bold uppercase '>{name}</h3>
          <div className='flex space-x-2'>
            <button
              onClick={handlePokemon}
              className='border border-[#ee1515] rounded-md px-2 uppercase font-bold text-[#ee1515] text-sm py-1'
            >
              Ver mais informações
              <span></span>
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default PokemonCard;
