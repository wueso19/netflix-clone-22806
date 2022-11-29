import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  const { backdrop, name } = movie;
  return (
    <div className="w-[215px] h-[121px]">
      <Link to={"/browse"} className="w-full h-full">
        <div className="w-full h-full overflow-hidden relative rounded-[0.2vw]">
          <img src={backdrop} alt={name} />
        </div>
      </Link>
    </div>
  );
};
export default Card;
