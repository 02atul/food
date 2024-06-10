
import './Browse.css';
import Header from '../Header/Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';

import SecondaryContainer from '../SecondaryContainer';
import MainContainer from '../MainContainer';
const Browse = () => {
 useNowPlayingMovies()
  return (
    <div className="browse-container">
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      
    </div>
  );
}

export default Browse;
