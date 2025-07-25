import { useEffect, useState } from "react";

import CardBase from "./CardBase.tsx";
import club from "../assets/club.svg";
import diamond from "../assets/diamond.svg";
import heart from "../assets/heart.svg";
import spade from "../assets/spade.svg";

type CardEditorProps = {
  suit: string;
  cardNumber: string;
  value: number;
  quantity: number;
};

const CardEditor: React.FC<CardEditorProps> = ({ suit, cardNumber, value, quantity }) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const [currentValue, setCurrentValue] = useState(value);

  const quantityPlusOne = () => {
    setCurrentQuantity(currentQuantity + 1);
  };
  const quantityMinusOne = () => {
    if (currentQuantity >= 1) {
      setCurrentQuantity(currentQuantity - 1);
    } else return;
  };
  const valuePlusOne = () => {
    setCurrentValue(currentValue + 1);
  };
  const valueMinusOne = () => {
    setCurrentValue(currentValue - 1);
  };
  let suitName: string = suit;
  switch (suitName) {
    case `${club}`:
      suitName = "Clubs";
      break;
    case `${diamond}`:
      suitName = "Diamonds";
      break;
    case `${heart}`:
      suitName = "Hearts";
      break;
    case `${spade}`:
      suitName = "Spades";
      break;
  }
  let name: string = cardNumber;
  switch (name) {
    case "A":
      name = "Ace";
      break;
    case "J":
      name = "Jack";
      break;
    case "Q":
      name = "Queen";
      break;
    case "K":
      name = "King";
      break;
  }

  return (
    <div className="bg-offblinding w-50 h-110 rounded shadow-sm shadow-black">
      <div className="items-center self-center h-[60%] w-auto">
        <CardBase suit={suit} cardNumber={cardNumber} />
      </div>
      <div className="flex flex-col justify-end items-start w-full h-[40%]">
        <p className="self-center">
          {name} of {suitName}
        </p>
        <div className="flex w-[100%] pb-1 pt-1">
          <p className="pl-2">Value</p>
          <div className="flex w-[100%] text-center justify-end pr-1">
            <button className="border rounded-l min-w-4" onClick={valueMinusOne}>
              -
            </button>
            <p className="border min-w-7">{currentValue}</p>
            <button className="border rounded-r min-w-4" onClick={valuePlusOne}>
              +
            </button>
          </div>
        </div>
        <div className="flex w-[100%] pb-1">
          <p className="pl-2">Quantity</p>
          <div className="flex w-[100%] text-center justify-end pr-1">
            <button className="border rounded-l min-w-4" onClick={quantityMinusOne}>
              -
            </button>
            <p className="border min-w-7">{currentQuantity}</p>
            <button className="border rounded-r min-w-4" onClick={quantityPlusOne}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardEditor;
