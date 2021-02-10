import React from 'react';
import '../styles/MovieCard.css';

const MovieCard = ({movie}) => {
    console.log(movie);
    return (
        <div className="col-md-12">
            <figure className="card">
                <img src={movie.Poster} alt=""/>
                <figcaption>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Released}</p>
                </figcaption><i className="ion-plus"></i>
            </figure>
        </div>
    )
}

export default MovieCard
