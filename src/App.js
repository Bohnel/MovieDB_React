import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import MovieContainer from './components/MovieContainer';
import Topic from './components/Topic';
require('dotenv').config();

const API_KEY = process.env.REACT_APP_API_KEY
const MOVIE_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" + API_KEY + "&page1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=" + API_KEY + "&query=";

const App = () => {
  const [movie, setMovie] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await axios(MOVIE_API)
      setMovie(result.data.results)
      setIsLoading(false)
      console.log(result.data)
    }

    const fetchSearch = async () => {
      const result = await axios(SEARCH_API+query)
      setMovie(result.data.results)
      setIsLoading(false)
    }

    if(!query) {
      fetchMovies()
    } else {
      fetchSearch()
    }

  }, [query])
  return (
    <div className="container">
      <Header getQuery={ (q) => setQuery(q) }></Header>
      <Topic></Topic>
      <MovieContainer isLoading={ isLoading } movie={ movie }/>
    </div>
  );
}

export default App;
