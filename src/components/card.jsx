import cardSvg from "../assets/images/card-logo.svg";
import background from "../assets/images/bg-card-front.png";
const Card = () => {
  return (
    <div
      className="px-5 sm:px-8 py-5 sm:py-8 text-white rounded-lg w-full h-full"
      style={{ backgroundImage: `url(${background})` }}
    >
      <img src={cardSvg} alt="" className="w-14 sm:w-20" />
      <div className="flex mt-8 sm:mt-12 mb-3 sm:mb-4 space-x-1 sm:space-x-2 text-xl sm:text-3xl tracking-wider">
        <p>0000</p>
        <p>0000</p>
        <p>0000</p>
        <p>1011</p>
      </div>
      <div className="flex justify-between text-xs sm:text-sm">
        <p>FELICIA LEIRE</p>
        <p>09/00</p>
      </div>
    </div>
  );
};

export default Card;
