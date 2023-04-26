import { About } from '../components/about/About';
import { MainContent } from './../components/mainContent/MainContent';

export const HomePage = ({ db, favorite, setFavorite }) => {
  return (
    <div>
      <About />
      <MainContent db={db} favorite={favorite} setFavorite={setFavorite}/>
    </div>
  );
};
