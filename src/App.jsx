import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import MovieDetails from './Pages/MovieDetails';
import Todo from './Pages/Todo';
// import { connect } from 'react-redux';

function App() {

  return (
    <>
      <Routes>
          <Route path='/' Component={Home} />
          <Route path='/moviedetails/:movieId' Component={MovieDetails} />
          <Route path='/todo/' Component={Todo} />
      </Routes>
    </>
  )
}

export default App
