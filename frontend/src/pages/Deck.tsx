import { useEffect, useState } from "react";
import CardBase from "../components/CardBase.tsx";
import type { CardBaseProps } from "../components/CardBase.tsx";
import club from "../assets/club.svg";
import diamond from "../assets/diamond.svg";
import heart from "../assets/heart.svg";
import spade from "../assets/spade.svg";

export type DeckResponse = {
  deck_id: string;
};

export type ApiResponse = {
  cards: {
    value: string;
    suit: string;
  }[];
};

const Deck: React.FC = () => {
  const [cards, setCards] = useState<CardBaseProps[]>([]);
  useEffect(() => {
    const fetchCards = async () => {
      const deckIdCreatorUrl: string = `https://deckofcardsapi.com/api/deck/new/?cards=AC,AD,AH,AS,2C,2D,2H,2S,3C,3D,3H,3S,4C,4D,4H,4S,5C,5D,5H,5S,6C,6D,6H,6S,7C,7D,7H,7S,8C,8D,8H,8S,9C,9D,9H,9S,0C,0D,0H,0S,JC,JD,JH,JS,QC,QD,QH,QS,KC,KD,KH,KS`;
      try {
        const deckIdResponse = await fetch(deckIdCreatorUrl);
        if (!deckIdResponse.ok) {
          throw new Error(`Response status: ${deckIdResponse.status}`);
        }
        const deckIdJson: DeckResponse = await deckIdResponse.json();
        const deckId: string = deckIdJson.deck_id;
        const url: string = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`;
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

export default Deck;
