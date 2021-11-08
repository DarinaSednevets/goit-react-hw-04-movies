import { Link } from 'react-router-dom'



function MovieList({ movies }) {

    return (
        <>
            <ul>{
                movies.map(({ id, title }) => {
                    return <li id={id}>
                        <Link>{title}</Link>
                    </li>
                })
            }</ul>
        </>
    )
}
export default MovieList;


