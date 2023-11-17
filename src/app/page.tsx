import { CharacterList } from '@/components/character_selection/CharacterList';

const Home = () => {
  return (
    <div className='root-container'>
      <div>
        <header></header>
        <CharacterList />
        <footer></footer>
      </div>
    </div>
  );
};

export default Home;
