import { useEffect, useState } from "react";
import CardEditor from "../components/CardEditor";
import club from "../assets/club.svg";
import diamond from "../assets/diamond.svg";
import heart from "../assets/heart.svg";
import spade from "../assets/spade.svg";

type Request = {
  urlTag: string;
};

const EditDeck: React.FC = () => {
  const [tags, setTags] = useState<Request[]>([]);
  const cardEditors = [
    { suit: `${club}`, cardNumber: "A", value: 11, quantity: 1 },
    { suit: `${diamond}`, cardNumber: "A", value: 11, quantity: 1 },
    { suit: `${heart}`, cardNumber: "A", value: 11, quantity: 1 },
    { suit: `${spade}`, cardNumber: "A", value: 11, quantity: 1 },
    { suit: `${club}`, cardNumber: "2", value: 2, quantity: 1 },
    { suit: `${diamond}`, cardNumber: "2", value: 2, quantity: 1 },
    { suit: `${heart}`, cardNumber: "2", value: 2, quantity: 1 },
    { suit: `${spade}`, cardNumber: "2", value: 2, quantity: 1 },
    { suit: `${club}`, cardNumber: "3", value: 3, quantity: 1 },
    { suit: `${diamond}`, cardNumber: "3", value: 3, quantity: 1 },
    { suit: `${heart}`, cardNumber: "3", value: 3, quantity: 1 },
    { suit: `${spade}`, cardNumber: "3", value: 3, quantity: 1 },
    { suit: `${club}`, cardNumber: "4", value: 4, quantity: 1 },
    { suit: `${diamond}`, cardNumber: "4", value: 4, quantity: 1 },
    { suit: `${heart}`, cardNumber: "4", value: 4, quantity: 1 },
    { suit: `${spade}`, cardNumber: "4", value: 4, quantity: 1 },
    { suit: `${club}`, cardNumber: "5", value: 5, quantity: 1 },
    { suit: `${diamond}`, cardNumber: "5", value: 5, quantity: 1 },
    { suit: `${heart}`, cardNumber: "5", value: 5, quantity: 1 },
    { suit: `${spade}`, cardNumber: "5", value: 5, quantity: 1 },
    { suit: `${club}`, cardNumber: "6", value: 6, quantity: 1 },
    { suit: `${diamond}`, cardNumber: "6", value: 6, quantity: 1 },
    { suit: `${heart}`, cardNumber: "6", value: 6, quantity: 1 },
    { suit: `${spade}`, cardNumber: "6", value: 6, quantity: 1 },
    { suit: `${club}`, cardNumber: "7", value: 7, quantity: 1 },
    { suit: `${diamond}`, cardNumber: "7", value: 7, quantity: 1 },
    { suit: `${heart}`, cardNumber: "7", value: 7, quantity: 1 },
    { suit: `${spade}`, cardNumber: "7", value: 7, quantity: 1 },
    { suit: `${club}`, cardNumber: "8", value: 8, quantity: 1 },
    { suit: `${diamond}`, cardNumber: "8", value: 8, quantity: 1 },
    { suit: `${heart}`, cardNumber: "8", value: 8, quantity: 1 },
    { suit: `${spade}`, cardNumber: "8", value: 8, quantity: 1 },
    { suit: `${club}`, cardNumber: "9", value: 9, quantity: 1 },
    { suit: `${diamond}`, cardNumber: "9", value: 9, quantity: 1 },
    { suit: `${heart}`, cardNumber: "9", value: 9, quantity: 1 },
    { suit: `${spade}`, cardNumber: "9", value: 9, quantity: 1 },
    { suit: `${club}`, cardNumber: "10", value: 10, quantity: 1 },
    { suit: `${diamond}`, cardNumber: "10", value: 10, quantity: 1 },
    { suit: `${heart}`, cardNumber: "10", value: 10, quantity: 1 },
    { suit: `${spade}`, cardNumber: "10", value: 10, quantity: 1 },
    { suit: `${club}`, cardNumber: "J", value: 10, quantity: 1 },
    { suit: `${diamond}`, cardNumber: "J", value: 10, quantity: 1 },
    { suit: `${heart}`, cardNumber: "J", value: 10, quantity: 1 },
    { suit: `${spade}`, cardNumber: "J", value: 10, quantity: 1 },
    { suit: `${club}`, cardNumber: "Q", value: 10, quantity: 1 },
    { suit: `${diamond}`, cardNumber: "Q", value: 10, quantity: 1 },
    { suit: `${heart}`, cardNumber: "Q", value: 10, quantity: 1 },
    { suit: `${spade}`, cardNumber: "Q", value: 10, quantity: 1 },
    { suit: `${club}`, cardNumber: "K", value: 10, quantity: 1 },
    { suit: `${diamond}`, cardNumber: "K", value: 10, quantity: 1 },
    { suit: `${heart}`, cardNumber: "K", value: 10, quantity: 1 },
    { suit: `${spade}`, cardNumber: "K", value: 10, quantity: 1 },
  ];
  return (
    <div className="w-dvw min-h-screen">
      <div className="flex justify-center">
        <button className="flex text-2xl p-10">
          <p className="min-w-40 w-auto self-center border bg-gray-400 hover:bg-gray-600 hover:cursor-pointer rounded p-3">Save Changes</p>
        </button>
        <button className="flex text-2xl p-10">
          <p className="min-w-40 w-auto self-center border bg-gray-400 hover:bg-gray-600 hover:cursor-pointer rounded p-3">Reset</p>
        </button>
      </div>
      <div className="flex flex-wrap justify-center p-2 gap-5">
        {cardEditors.map((cardEditor, i) => (
          <CardEditor key={i} suit={cardEditor.suit} cardNumber={cardEditor.cardNumber} value={cardEditor.value} quantity={cardEditor.quantity} />
        ))}
      </div>
    </div>
  );
};

export default EditDeck;
