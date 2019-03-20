import React from 'react';

function FilmPoster(props) {
    const posterUrl = 'https://image.tmdb.org/t/p/w780/' + props.film.poster_path

    return (
         <img src={posterUrl} alt="" />
    )
}

export default FilmPoster