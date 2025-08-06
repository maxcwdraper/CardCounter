import warRules from "../rules/war.ts";
import blackjackRules from "../rules/blackjack.ts";
import pokerRules from "../rules/poker.ts";
import design from "../assets/design.svg";

const Rules: React.FC = () => {
  return (
    <div className="w-dvw h-full">
      <div className="flex text-4xl justify-center p-10">Rules</div>
      <p className="flex text-2xl justify-center text-center pr-10 pl-10 pb-5 pt-5">
        War:
        <br />
        {warRules}
      </p>
      <img src={design} className="p-5" />
      <p className="flex text-2xl justify-center text-center pr-10 pl-10 pb-5 pt-5">
        Blackjack:
        <br />
        {blackjackRules}
      </p>
      <img src={design} className="p-5" />
      <p className="flex text-2xl justify-center text-center pr-10 pl-10 pb-5 pt-5">
        Poker:
        <br />
        {pokerRules}
      </p>
    </div>
  );
};

export default Rules;
