import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Movies from './pages/movies/Movies';
import MovieDetail from './pages/movies/MovieDetail';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/movies/:type" element={<Movies/>}/>
        <Route path="movie/:id" element={<MovieDetail/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
