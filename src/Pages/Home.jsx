import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'
import SearchMovie from '../Components/SearchMovie'
import { useState } from 'react'
import { getDesiredMovieService } from '../service/movie'
import MovieCard from '../Components/MovieCard'
import nodata from "../assets/nodata.webp";
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { MOVIE_ACTION_TYPES, saveMovies } from '../actions/movies.actions';

function Home({ error = null, movies  = {}, saveAllMovies = () => {}, fetchMoviesError = () => {} }) {
  const navigator = useNavigate();
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);

  function onChange(e) {
    if(e) {
      setSearch(e.target.value)
    }
  }

  function onSelect(e) {
    if(e) {
      setType(e.target.value)
    }
  }

  function handleMovieClick(id) {
    if(id) {
        navigator(`/moviedetails/${id}`)
    }
  }

  function onClick(e) {
    if(e && search) {
      getDesiredMovieService(search, type, page)
      .then((data) => {
        if(data[0]) {
          saveAllMovies(MOVIE_ACTION_TYPES.SAVE_ALL_MOVIES, data[0]); // action creator
        } else {
          fetchMoviesError(MOVIE_ACTION_TYPES.FETCH_MOVIE_ERROR, data[1]);
        }
      });
    } else {
      alert("Data missing");
    }
  }

  function onPage(e) {
    if(e) {
      setPage(Number(e.target.value))
    }
  }

  return (
    <>
      <div>
        <a target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Movie Home</h1>
      <div className="card">
        <p>
          List, Search and filter all movies under one roof
        </p>
        <SearchMovie onSearch={onChange} onSelect={onSelect} onClick={onClick} onPage={onPage} />
        <div className='movie-card-container '>
              {
                movies.length > 0 ? movies.map((movie, index) => <MovieCard key={index} data={movie} onClick={handleMovieClick} />  ) : <img src={nodata} width={100}  />
              }
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state = {}) => {
  return {
      movies: state.movies.data || [],
      error: state.error,
      todos: state.todos.data || [],
  };  
};

const mapDispatchToProps = (dispatcher) => {
  return {
      saveAllMovies: (type, payload) => dispatcher(saveMovies(type, payload)),
      fetchMoviesError: (type, payload) => dispatcher({type, payload}),
  };
};

Home.propTypes = {
    error: String,
    movies: Array,
    saveAllMovies: Function,
    fetchMoviesError: Function
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
