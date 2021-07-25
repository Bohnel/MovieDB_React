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
const GENRE_API = "https://api.themoviedb.org/3/discover/movie?api_key=" + API_KEY + "&with_genres=";
const ID_API = "https://api.themoviedb.org/3/movie/";

const App = () => {
  const [movie, setMovie] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [genre, setGenre] = useState('')
  const [page, setPage] = useState(1)
  const [currentAPI, setAPI] = useState('')
  const [topic, setTopic] = useState('')
  const [favourites, setFavourites] = useState([])

  const goToTop = () => {
    window.scrollTo(0, 0)
  }

  const nextPage = async () => {
    let nextPage = page + 1
    const result = await axios(currentAPI + "&page=" + nextPage)
    setMovie(result.data.results)
    setPage(nextPage)
    goToTop()
  }
  const prevPage = async () => {
    let prevPage = page - 1
    const result = await axios(currentAPI + "&page=" + prevPage)
    setMovie(result.data.results)
    setPage(prevPage)
    goToTop()
  }

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await axios(MOVIE_API)
      setTopic(1)
      setPage(1)
      setAPI(MOVIE_API)
      setMovie(result.data.results)
      setIsLoading(false.data)
      goToTop()
    }

    const fetchGenre = async () => {
      const result = await axios(GENRE_API + genre)
      console.log(favourites)
      setQuery('')
      setTopic(genre)
      setPage(1)
      goToTop()
      setAPI(GENRE_API + genre)
      console.log(result)
      setMovie(result.data.results)
      setIsLoading(false)
    }

    const fetchFavs = async () => {
      const result = await axios(ID_API + favourites + "?api_key=" + API_KEY + "&language=en-US")
      console.log(result.data)
    }

    const fetchSearch = async () => {
      const result = await axios(SEARCH_API + query)
      setAPI(SEARCH_API + query)
      setTopic(2)
      setPage(1)
      setMovie(result.data.results)
      setIsLoading(false)
      goToTop()
    }

    if (!query) {
      fetchMovies()
      if (genre) {
        if (genre === '3') {
          fetchFavs()
        }
        fetchGenre()
      }
    } else {
      fetchSearch()
    }
  }, [query, genre, favourites])
  return (
    <div className="container">
      <Header getGenre={setGenre} getQuery={(q) => setQuery(q)}></Header>
      <Topic topic={topic}></Topic>
      <MovieContainer handleFavouriteClick={(f) => setFavourites(f)} isLoading={isLoading} movie={movie} />
      <div className="bottom">
        <input type="button" style={{ margin: "1em" }} disabled={page === 1 ? true : false} onClick={prevPage} value="prev Page"></input>
        <input type="button" style={{ margin: "1em" }} onClick={nextPage} value="next Page"></input>
      </div>
    </div>
  );
}

export default App;
