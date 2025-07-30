import warRules from "../rules/war.ts";
import blackjackRules from "../rules/blackjack.ts";
import pokerRules from "../rules/poker.ts";

const Rules: React.FC = () => {
  return (
    <div className="w-dvw h-full">
      <div className="flex text-3xl justify-center p-10">Rules</div>
      <p className="flex text-xl justify-center text-center pr-10 pl-10 pb-5 pt-5">
        War:
        <br />
        {warRules}
      </p>
      <p className="flex text-xl justify-center text-center pr-10 pl-10 pb-5 pt-5">
        Blackjack:
        <br />
        {blackjackRules}
      </p>
      <p className="flex text-xl justify-center text-center pr-10 pl-10 pb-5 pt-5">
        Poker:
        <br />
        {pokerRules}
      </p>
    </div>
  );
};

export default Rules;
