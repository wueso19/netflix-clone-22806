import Hero from "./Hero"

const MainView = () => {
  return (
    <div className="min-h-[1000px] relative z-0">
        <div className="mt-[-70px] overflow-hidden pt-0 px-0 pb-[50px] z-0">
            <Hero />
        </div>
    </div>
  )
}
export default MainView