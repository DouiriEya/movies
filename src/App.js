import React, { useState } from 'react';
import './App.css';
import Filter from './Filter';
import MovieList from './MovieList';

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: 'The Godfather', description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', picUrl: 'https://www.imdb.com/title/tt0068646/mediaviewer/rm10105600', rating: 5 },
    { id: 2, title: 'The Shawshank Redemption', description: 'Two imprisoned', picUrl: 'https://www.imdb.com/title/tt0111161/mediaviewer/rm10105600', rating: 4 },
  ]);
  const [titleSearched, setTitleSearched] = useState('');
  const [ratingSearched, setRatingSearched] = useState(0);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(titleSearched.toLowerCase()) && movie.rating >= ratingSearched
  );

  const add = () => {
    const newMovie = {
      id: movies.length + 1,
      title: 'New Movie',
      description: 'New movie description',
      picUrl: 'https://www.imdb.com/title/tt0111161/mediaviewer/rm10105600',
      rating: 3,
    };
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <h1>this is a movie App</h1>
      <Filter
        titleSearched={titleSearched}
        setTitleSearched={setTitleSearched}
        ratingSearched={ratingSearched}
        setRatingSearched={setRatingSearched}
      />
      <button onClick={add}>Add a movie</button>
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
