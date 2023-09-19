import './App.css';
import PokemonList from './components/pokemonList';
import { ToastContainer } from 'react-toastify';
import PokemonModal from './components/pokemonModal';
import SearchFilter from './components/searchFilter';
import { useRecoilValue } from 'recoil';
import { searchFilter } from './store/atoms';
import usePokemon from './hooks/usePokemon';
import PokemonStats from './components/pokemonStats';

function App() {
  const search = useRecoilValue(searchFilter);
  const { data, error, isLoading } = usePokemon(search);

  return (
    <>
      <div className='mx-auto my-10 space-y-6 max-w-screen-lg'>
        <div className='mx-auto max-w-fit'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg'
            alt=''
          />
        </div>
        <div className='max-w-md mx-auto'>
          <SearchFilter />
        </div>
        <div className='flex justify-center'>
          {isLoading && !error ? (
            <>Loading ...</>
          ) : data && search === data.name ? (
            <PokemonStats pokemon={data} />
          ) : data && search && search !== data.name ? (
            <h2>Nenhum pokemon encontrado</h2>
          ) : (
            <PokemonList />
          )}
        </div>
      </div>
      <PokemonModal />
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        newestOnTop
        closeOnClick
        limit={4}
      />
    </>
  );
}

export default App;
