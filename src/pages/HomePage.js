import api from "../services/searchApi";
import { useEffect, useState } from 'react';
import MovieList from "../components/MovieList/MovieList";


function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        api.getTrendingMovies()
            .then(movies => {
                setMovies(movies)
            })
    }, []);




    return (
        <>
            <h1>Popular movies</h1>
            {movies !== [] && <MovieList movies={movies} />}
        </>
    );
}

export default HomePage;

