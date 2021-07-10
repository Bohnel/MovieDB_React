import React from 'react'
import Movie from './Movie'

const MovieContainer = ({ movie, isLoading }) => {
    return isLoading
        ? (<h1>Loading...</h1>)
        : (
            <div className="movies-container">
                {movie.map(movieShow => (
                    <Movie key={movieShow.id} movieShow={movieShow}/>
                ))}
            </div>
        )
}

export default MovieContainer
