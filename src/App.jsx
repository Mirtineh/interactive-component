import CardForm from "./components/cardForm";
import Card from "./components/card";
import { useState } from "react";
import RegComplete from "./components/regComplete";
function App() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState([
    "0000",
    "0000",
    "0000",
    "0000",
  ]);
  const [isRegComplete, setRegComplete] = useState(false);
  return (
    <div className="flex flex-col sm:flex-row sm:h-screen">
      <Card name={name} cardNumber={cardNumber} />
      {!isRegComplete ? (
        <CardForm
          onNameChange={(name) => {
            setName(name);
          }}
          onNumberChange={(cardNumber) => {
            setCardNumber(cardNumber);
          }}
          onSubmit={() => setRegComplete(true)}
        />
      ) : (
        <RegComplete />
      )}
    </div>
  );
}

export default App;
