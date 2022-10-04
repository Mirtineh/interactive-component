import CardForm from "./components/cardForm";
import Card from "./components/card";
import { useState } from "react";
import RegComplete from "./components/regComplete";
const initialState = {
  name: "",
  cardNumber: "0000 0000 0000 0000",
  month: "",
  year: "",
  cvc: "",
  isRegComplete: false,
};
function App() {
  const [card, setCard] = useState(initialState);
  const updateCard = (card) => setCard({ ...card });
  const resetCard = () => setCard(initialState);
  const regComplete = () => {
    card.isRegComplete = true;
    setCard({ ...card });
  };

  return (
    <div className="flex flex-col sm:flex-row sm:h-screen">
      <Card
        name={card.name}
        cardNumber={card.cardNumber}
        month={card.month}
        year={card.year}
        cvc={card.cvc}
      />
      {!card.isRegComplete ? (
        <CardForm onInputChange={updateCard} onSubmit={regComplete} />
      ) : (
        <RegComplete onComplete={resetCard} />
      )}
    </div>
  );
}

export default App;
