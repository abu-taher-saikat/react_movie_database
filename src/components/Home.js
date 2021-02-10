import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import Sidebar from './Sidebar'


const Home = () => {
    const [movies, setMovies] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const url = "http://www.omdbapi.com/?t=life+in+a+metro&apikey=435d05eb";
    
    // console.log(typeof(movies));
    
    useEffect(() => {
        axios.get(url)
        .then(res=> {
            setMovies(res.data)
            setIsLoading(false) 
        })
        // .catch(err => console.log(err))
    },[]);

    return (
        <div className="row">
            <div className="col-md-9">
                <div className="row">
                    {isLoading ? <h1>Loading</h1> : (
                        <MovieCard movie={movies}></MovieCard>
                    )}

                </div>
                {/* {console.log(movies)} */}
            </div>
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
        </div>
    )
}

export default Home
