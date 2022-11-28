import MainView from "../components/MainView";
import PinningHeader from "../components/PinningHeader";

const Browse = () => {
  return (
      <div className="bg-background-dark w-full h-full overflow-hidden z-0 ">
        <PinningHeader />
        <MainView />
      </div>
  );
};
export default Browse;
