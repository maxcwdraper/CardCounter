import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import CardBase from "../components/CardBase.tsx";
import cardEditors from "../components/CardEditorList.tsx";
import club from "../assets/club.svg";
import diamond from "../assets/diamond.svg";
import heart from "../assets/heart.svg";
import spade from "../assets/spade.svg";
import type { ApiResponse, CardBaseProps, DeckResponse } from "../types";

const CustomDeck: React.FC = () => {
  const [cards, setCards] = useState<CardBaseProps[]>([]);
  const location = useLocation();
  const passedState = location.state as { cardEditors?: typeof cardEditors };
  const editors = passedState?.cardEditors ?? cardEditors;
  useEffect(() => {
    const fetchCards = async () => {
      const encodedCards: string[] = [];
      for (const cardCode in editors) {
        const { quantity } = editors[cardCode];
        for (let i = 0; i < quantity; i++) {
          encodedCards.push(cardCode);
        }
      }
      const encodedCardsString: string = encodedCards.join(",");
      const deckIdCreatorUrl: string = `https://deckofcardsapi.com/api/deck/new/?cards=${encodedCardsString}`;
      const componentLengthArray: string[] = deckIdCreatorUrl.split(",");
      try {
        const deckIdResponse = await fetch(deckIdCreatorUrl);
        if (!deckIdResponse.ok) {
          throw new Error(`Response status: ${deckIdResponse.status}`);
        }
        const deckIdJson: DeckResponse = await deckIdResponse.json();
        const deckId: string = deckIdJson.deck_id;
        const url: string = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${componentLengthArray.length}`;
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
          const json: ApiResponse = await response.json();
          const converted: CardBaseProps[] = json.cards.map((card) => {
            let value: string;
            switch (card.value) {
              case "JACK":
                value = "J";
                break;
              case "QUEEN":
                value = "Q";
                break;
              case "KING":
                value = "K";
                break;
              case "ACE":
                value = "A";
                break;
              default:
                value = card.value;
            }
            let suit: string;
            switch (card.suit) {
              case "CLUBS":
                suit = club;
                break;
              case "DIAMONDS":
                suit = diamond;
                break;
              case "HEARTS":
                suit = heart;
                break;
              case "SPADES":
                suit = spade;
                break;
            }
            return { suit: suit, cardNumber: value };
          });
          setCards(converted);
        } catch (error) {
          console.error(error.message);
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchCards();
  }, [passedState]);
  return (
    <div className="min-w-screen w-dvw min-h-screen pt-10 pb-10">
      <div className="flex flex-wrap justify-around w-full h-auto gap-5">
        {cards.map((card, i) => (
          <CardBase key={i} suit={card.suit} cardNumber={card.cardNumber} />
        ))}
      </div>
    </div>
  );
};

export default CustomDeck;
