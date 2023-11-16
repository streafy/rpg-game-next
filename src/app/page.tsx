import { CharacterList } from '@/components/character_selection/CharacterList';
import { Input } from '@/components/shared/Input';
import { Button } from '@/components/shared/Button';

const Home = () => {
  return (
    <div className="root-container">
      <div>
        <header></header>
        <CharacterList />
        <Button />
        <footer></footer>
      </div>
    </div>
  );
};

export default Home;
