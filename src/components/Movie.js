import React from 'react'

const IMAGE_API = "https://image.tmdb.org/t/p/w1280"

const Movie = ({ movieShow }) => {
    return (
        <div className="movie">
            <img src={IMAGE_API + movieShow.poster_path} alt={movieShow.title} />
                <div className="movie-info">
                    <h3>{movieShow.title}</h3>
                    <span>{movieShow.vote_average}</span>
                </div>
                <div className="movie-over">
                    <h2>Overview:</h2>
                    <p>{movieShow.overview}</p>
                </div>
        </div>
    )
}

export default Movie
