import { Fragment } from "react";
import Card from "./components/card";
import cardBack from "./assets/images/bg-card-back.png";
function App() {
  return (
    <Fragment>
      <div className="flex flex-col sm:flex-row sm:h-screen">
        <div className=" sm:w-[400px] bg-very-dark-violet w-full h-[250px] sm:h-auto pt-10 sm:pt-52 sm:pl-28">
          <div className="relative w-80 sm:w-[500px] h-[250px] sm:h-[490px] mx-auto ">
            <img
              src={cardBack}
              alt=""
              className="absolute right-0 sm:bottom-0 w-10/12 sm:w-10/12 h-[159px] sm:h-56"
            />
            <div className="absolute left-0 bottom-0 sm:top-0 h-[159px] sm:h-56 w-10/12 sm:w-10/12">
              <Card />
            </div>
          </div>
        </div>
        <div className="px-7 mt-24 sm:basis-4/6">
          <div className="my-5">
            <label for="name">CARDHOLDER NAME</label>
            <input
              type="text"
              id="name"
              className="w-full mt-2 border rounded-lg p-2"
            />
          </div>

          <div className="my-5">
            <label for="number">Card Number</label>
            <input
              type="text"
              id="number"
              className="w-full mt-2 border rounded-lg p-2"
            />
          </div>
          <div className="my-5 flex space-x-3">
            <div className="basis-2/3">
              <label for="date">Exp. Date (MM/YY)</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  id="date"
                  className="w-full mt-2 border rounded-lg p-2"
                />
                <input
                  type="text"
                  id="date"
                  className="w-full mt-2 border rounded-lg p-2"
                />
              </div>
            </div>
            <div>
              <label for="date">cvc</label>
              <input
                type="text"
                id="date"
                className="w-full mt-2 border rounded-lg p-2"
              />
            </div>
          </div>
          <button className="bg-very-dark-violet w-full text-white py-3 rounded-lg">
            Confirm
          </button>
        </div>
      </div>

      {/* <div className="flex flex-col sm:flex-row sm:h-screen">
        <div className="relative sm:basis-2/5">
          <div className="h-60 sm:h-full w-full bg-very-dark-violet">
            <img
              src={cardBack}
              alt=""
              className="absolute left-20 sm:left-80 top-9 sm:top-[310px] sm:top h-[155px] w-[285px]"
            />
            <div className="absolute left-5 sm:left-60 top-[124px]">
              <Card />
            </div>
          </div>
        </div>
        <div>
          <div className="px-7 mt-24">
            <div className="my-5">
              <label for="name">CARDHOLDER NAME</label>
              <input
                type="text"
                id="name"
                className="w-full mt-2 border rounded-lg p-2"
              />
            </div>

            <div className="my-5">
              <label for="number">Card Number</label>
              <input
                type="text"
                id="number"
                className="w-full mt-2 border rounded-lg p-2"
              />
            </div>
            <div className="my-5 flex space-x-3">
              <div className="basis-2/3">
                <label for="date">Exp. Date (MM/YY)</label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    id="date"
                    className="w-full mt-2 border rounded-lg p-2"
                  />
                  <input
                    type="text"
                    id="date"
                    className="w-full mt-2 border rounded-lg p-2"
                  />
                </div>
              </div>
              <div>
                <label for="date">cvc</label>
                <input
                  type="text"
                  id="date"
                  className="w-full mt-2 border rounded-lg p-2"
                />
              </div>
            </div>
            <button className="bg-very-dark-violet w-full text-white py-3 rounded-lg">
              Confirm
            </button>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
}

export default App;
