import React, { useState } from 'react'
import Movie from './Movie'

const MovieContainer = ({ handleFavouriteClick, movie, isLoading }) => {
    const [favourites] = useState([])

    const addFavourites = (id) => {
        favourites.indexOf(id) === -1 ? favourites.push(id) : console.log("This item already exists");
        handleFavouriteClick(favourites)
    }

    return isLoading
        ? (<h1>Loading...</h1>)
        : (
            <div className="movies-container">
                {movie.map(movieShow => (
                    <Movie handleFavouriteClick={(f) => addFavourites(f)} key={movieShow.id} movieShow={movieShow}/>
                ))}
            </div>
            
        )
}

export default MovieContainer
