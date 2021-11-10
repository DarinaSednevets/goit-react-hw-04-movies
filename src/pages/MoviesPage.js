import MoviesPageSearch from "../components/MoviesPageSearch/MoviesPageSearch";
import MoviesPageSearchList from "../components/MoviesPageSearchList/MoviesPageSearchList";
import { useHistory, useLocation } from "react-router";

const MoviesPage = () => {


  const history = useHistory();
  const location = useLocation();

  const locationQuery = new URLSearchParams(location.search).get('query');

  const onChange = movieName => {
    history.push({
      ...location,
      search: `query=${movieName}`
    })
  }
  return (
    <>
      <MoviesPageSearch onChange={onChange} />
      {locationQuery && <MoviesPageSearchList movie={locationQuery} />}
    </>
  )
}

export default MoviesPage;