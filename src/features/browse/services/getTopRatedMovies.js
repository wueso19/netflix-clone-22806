import { TMDB } from "../../../config/tmdb";
import { moviesAdapter } from "../adapters/moviesAdapter";

export const getTopRatedMovies = async () => {
  const res = await TMDB.api.get(TMDB.path.movies.top_rated);
  const moviesAdapted = moviesAdapter(res.data.results);

  return moviesAdapted;
};
