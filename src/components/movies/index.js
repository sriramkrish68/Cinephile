import React from 'react';
import { useSelector } from 'react-redux';
import { MovieItem } from '../movieitem';
import './style.css';


export const Movies = () => {
    const { movies } = useSelector(state => state)

    return (
        <ul className="movies">
            {movies[0] ? movies[0].map((movie) => (
                <li className="movies__item" key={movie.imdbID}>
                    <MovieItem {...movie} />
                </li>
            )) : <span>Movie not found !</span>}
        </ul>
    )
}

