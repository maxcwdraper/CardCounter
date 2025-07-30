import { useEffect, useState } from "react";

import CardBase from "../components/CardBase.tsx";
import type { ApiResponse, DeckResponse } from "./Deck.tsx";
import type { CardBaseProps } from "../components/CardBase.tsx";
import cardEditors from "../components/CardEditorList.tsx";
import club from "../assets/club.svg";
import diamond from "../assets/diamond.svg";
import heart from "../assets/heart.svg";
import spade from "../assets/spade.svg";

const CustomDeck: React.FC = () => {
  const [cards, setCards] = useState<CardBaseProps[]>([]);
  useEffect(() => {
    const fetchCards = async () => {
      const encodedCards: string[] = [];
      for (let encodedValue in cardEditors) {
        for (let i = 0; i < cardEditors[encodedValue].quantity; i++) {
          encodedCards.push(encodedValue);
        }
      }
      const encodedCardsString: string = encodedCards.join(",");
      const deckIdCreatorUrl: string = `https://deckofcardsapi.com/api/new/?cards=${encodedCardsString}`;
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
  }, []);
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
