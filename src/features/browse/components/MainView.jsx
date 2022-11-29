import useFetch from "../../../auth/hooks/useFetch"
import { getPopularMovies } from "../services/getPopularMovies"
import { getTopRatedMovies } from "../services/getTopRatedMovies"
import Hero from "./Hero"
import Slider from "./Slider"

// backdrop: "https://image.tmdb.org/t/p/w1280//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg"
// id: 436270
// name: "Black Adam"
// description: "texto vario"
// poster: "https://image.tmdb.org/t/p/w780//moDLTCdLx38kMhN53KOTw0LdWMh.jpg"
// rating: 7.3

const MainView = () => {
  // const {  data, isLoading, error } = useFetch(getPopularMovies)
  // const {  data, isLoading, error } = useFetch(getTopRatedMovies)

  const popularMovies = useFetch(getPopularMovies)
  const topRatedMovies = useFetch(getTopRatedMovies)

  return (
    <div className="min-h-[1000px] relative z-0">
        <div className="mt-[-70px] overflow-hidden pt-0 px-0 pb-[50px] z-0">
            <Hero />
            <Slider movies={popularMovies.data} titleSlider={"Películas populares"} />
            <Slider movies={topRatedMovies.data} titleSlider={"Los más valorados"} />
        </div>
    </div>
  )
}
export default MainView