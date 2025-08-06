import { Link } from "react-router-dom";
import { useState } from "react";

import cardEditorList from "../components/CardEditorList";
import CardEditor from "../components/CardEditor";

const EditDeck: React.FC = () => {
  const [cardEditors, setCardEditors] = useState(cardEditorList);
  const editorKeys: string[] = Object.keys(cardEditors);
  const handleQuantityChange = (code: string, newQuantity: number) => {
    setCardEditors((prev) => {
      prev[code].quantity = newQuantity;
      return { ...prev };
    });
  };
  return (
    <div className="w-dvw min-h-screen">
      <div className="flex gap-5 font-serif justify-center">
        <Link to="/customdeck" state={{ cardEditors }} className="flex text-2xl m-10">
          <p className="min-w-40 w-auto text-center border bg-gray-400 hover:bg-gray-600 hover:cursor-pointer rounded p-3">Save Changes</p>
        </Link>
        <Link reloadDocument to="/edit" className="flex text-2xl m-10 self-center">
          <p className="min-w-40 w-auto text-center border bg-gray-400 hover:bg-gray-600 hover:cursor-pointer rounded p-3">Reset</p>
        </Link>
      </div>
      <div className="flex flex-wrap justify-center p-5 gap-10">
        {Object.values(cardEditors).map((cardEditor, i) => (
          <CardEditor
            key={i}
            suit={cardEditor.suit}
            cardNumber={cardEditor.cardNumber}
            value={cardEditor.value}
            quantity={cardEditor.quantity}
            cardCode={editorKeys[i]}
            onQuantityChange={handleQuantityChange}
          />
        ))}
      </div>
    </div>
  );
};

export default EditDeck;
