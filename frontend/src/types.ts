export type CardEditorProps = {
  quantity: number;
  value: number;
  suit: string;
  cardNumber: string;
  cardCode: string;
  onQuantityChange: (cardCode: string, newQuantity: number) => void;
};

export type DeckResponse = {
  deck_id: string;
  username: string;
  user: User;
};

export type ApiResponse = {
  cards: {
    value: string;
    suit: string;
  }[];
};

export type CardBaseProps = {
  suit: string;
  cardNumber: string;
};

export type User = {
  username: string;
  full_name: string;
  email: string;
  disabled?: boolean;
  hashed_password: string;
  token?: string;
  decks: DeckResponse[];
};
