import completeSvg from "../assets/images/icon-complete.svg";
const RegComplete = () => {
  return (
    <div className="flex flex-col  space-y-10 mt-24 sm:mt-60 w-80 mx-auto justify-center">
      <img src={completeSvg} alt="" className="mx-auto" />
      <div className="flex flex-col space-y-3">
        <p className="text-center text-3xl tracking-wider">THANK YOU!</p>
        <p className="text-center text-lg text-dark-grayish-violet">
          We've added your card details
        </p>
      </div>

      <button className="bg-very-dark-violet w-full text-white py-3 rounded-lg">
        Continue
      </button>
    </div>
  );
};

export default RegComplete;
