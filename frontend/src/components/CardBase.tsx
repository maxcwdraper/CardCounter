export type CardBaseProps = {
  suit: string;
  cardNumber: string;
};

const CardBase: React.FC<CardBaseProps> = ({ suit, cardNumber }) => {
  let cardImage;
  switch (cardNumber) {
    case "A":
      cardImage = (
        <div className="flex justify-center">
          <img src={suit} className="min-h-5 h-15 w-auto" />
        </div>
      );
      break;
    case "2":
      cardImage = (
        <div className="flex flex-col h-[75%] justify-between">
          <img src={suit} className="min-h-3 h-9 w-auto" />
          <img src={suit} className="min-h-3 h-9 w-auto" />
        </div>
      );
      break;
    case "3":
      cardImage = (
        <div className="flex flex-col h-[75%] items-between justify-between">
          <img src={suit} className="min-h-3 h-9 w-auto" />
          <img src={suit} className="min-h-3 h-9 w-auto" />
          <img src={suit} className="min-h-3 h-9 w-auto" />
        </div>
      );
      break;
    case "4":
      cardImage = (
        <div className="flex h-[75%] w-[70%] items-between justify-between">
          <div className="flex flex-col items-between justify-between">
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
          </div>
          <div className="flex flex-col items-between justify-between">
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
          </div>
        </div>
      );
      break;
    case "5":
      cardImage = (
        <div className="flex h-[75%] w-[70%] items-between justify-between">
          <div className="flex flex-col items-between justify-between">
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={suit} className="min-h-3 h-9 w-auto" />
          </div>
          <div className="flex flex-col items-between justify-between">
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
          </div>
        </div>
      );
      break;
    case "6":
      cardImage = (
        <div className="flex h-[75%] w-[70%] items-between justify-between">
          <div className="flex flex-col items-between justify-between">
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
          </div>
          <div className="flex flex-col items-between justify-between">
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
          </div>
        </div>
      );
      break;
    case "7":
      cardImage = (
        <div className="flex h-[75%] w-[70%] items-between justify-between">
          <div className="flex flex-col items-between justify-between">
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
          </div>
          <div className="flex flex-col h-[60%] items-center justify-center">
            <img src={suit} className="min-h-3 h-9 w-auto" />
          </div>
          <div className="flex flex-col items-between justify-between">
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
          </div>
        </div>
      );
      break;
    case "8":
      cardImage = (
        <div className="flex h-[75%] w-[70%] items-between justify-between">
          <div className="flex flex-col items-between justify-between">
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
          </div>
          <div className="flex flex-col items-center justify-around">
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
          </div>
          <div className="flex flex-col items-between justify-between">
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
          </div>
        </div>
      );
      break;
    case "9":
      cardImage = (
        <div className="flex h-[75%] w-[70%] items-between justify-between">
          <div className="flex flex-col items-between justify-between">
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={suit} className="min-h-3 h-9 w-auto" />
          </div>
          <div className="flex flex-col items-between justify-between">
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
          </div>
        </div>
      );
      break;
    case "10":
      cardImage = (
        <div className="flex h-[75%] w-[70%] items-between justify-between">
          <div className="flex flex-col items-between justify-between">
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
          </div>
          <div className="flex flex-col items-center justify-around">
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
          </div>
          <div className="flex flex-col items-between justify-between">
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
            <img src={suit} className="min-h-3 h-9 w-auto" />
          </div>
        </div>
      );
      break;
    case "J":
      cardImage = (
        <div className="flex justify-center">
          <img src={suit} className="min-h-5 h-15 w-auto" />
        </div>
      );
      break;
    case "Q":
      cardImage = (
        <div className="flex justify-center">
          <img src={suit} className="min-h-5 h-15 w-auto" />
        </div>
      );
      break;
    case "K":
      cardImage = (
        <div className="flex justify-center">
          <img src={suit} className="h-15 w-auto" />
        </div>
      );
      break;
  }

  return (
    <div className="flex flex-col aspect-7/10 h-auto max-h-60 sm:max-h-70 md:max-h-80 lg:max-h-90 xl:max-h-100 w-[100%] max-w-42 sm:max-w-49 md:max-w-56 lg:max-w-63 xl:max-w-70 rounded-lg shadow-md shadow-black bg-white">
      <div className="flex flex-col items-center h-[15%] w-full pl-1">
        <p className="lg:text-xl ml-1 self-start">{cardNumber}</p>
        <img src={suit} className="min-h-2 max-h-5 w-auto self-start" />
      </div>
      <div className="flex justify-center items-center self-center h-[70%] w-[70%] border rounded">{cardImage}</div>
      <div className="flex flex-col items-center h-[15%] w-full pl-1 rotate-180">
        <p className="lg:text-xl ml-1 self-start">{cardNumber}</p>
        <img src={suit} className="min-h-2 max-h-5 w-auto self-start" />
      </div>
    </div>
  );
};

export default CardBase;
