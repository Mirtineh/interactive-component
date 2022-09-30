import cardSvg from "../assets/images/card-logo.svg";
import background from "../assets/images/bg-card-front.png";
const CardFront = ({ name, cardNumber }) => {
  return (
    <div
      className="px-5 sm:px-8 py-5 sm:py-8 text-white rounded-lg w-full h-full"
      style={{ backgroundImage: `url(${background})` }}
    >
      <img src={cardSvg} alt="" className="w-14 sm:w-20" />
      <div className="flex mt-8 sm:mt-12 mb-3 sm:mb-4 space-x-1 sm:space-x-2 text-xl sm:text-3xl tracking-wider">
        {cardNumber.map((number) => (
          <p>{number}</p>
        ))}
      </div>
      <div className="flex justify-between text-xs sm:text-sm">
        <p>{name.toUpperCase()}</p>
        <p>09/00</p>
      </div>
    </div>
  );
};

export default CardFront;
