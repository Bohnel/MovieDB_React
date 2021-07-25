import React from 'react'

const IMAGE_API = "https://image.tmdb.org/t/p/w1280"

const Movie = ({ handleFavouriteClick, movieShow }) => {

    const viewInfo = () => {
        window.location.href = "https://www.themoviedb.org/movie/" + movieShow.id
    }

    const addFavourite = (id) => {
        handleFavouriteClick(id)
    }

    return (
        <div className="movie">
            <img src={IMAGE_API + movieShow.poster_path} alt={movieShow.title} />
                <div className="movie-info">
                    <h3>{movieShow.title}</h3>
                    <span>rating: {movieShow.vote_average}</span>
                </div>
                <div className="movie-over">
                    <h2>Overview:</h2>
                    <p>{movieShow.overview}</p>
                    <input type="button" onClick={ viewInfo } value="Show Infos"></input>
                    <input type="button" onClick={(e) => addFavourite(movieShow.id)} value="Favourite"></input>
                </div>
        </div>
    )
}

export default Movie