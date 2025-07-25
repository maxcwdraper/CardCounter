import warRules from "../rules/war.ts";
import blackjackRules from "../rules/blackjack.ts";
import pokerRules from "../rules/poker.ts";

const Rules: React.FC = () => {
  return (
    <div className="w-dvw min-h-screen">
      <div className="flex text-3xl justify-center p-10">Rules</div>
      <p className="flex text-center pb-5">
        War:
        <br />
        {warRules}
      </p>
      <p className="flex justify-center text-center pb-5">
        Blackjack:
        <br />
        {blackjackRules}
      </p>
      <p className="flex justify-center text-center pb-5">
        Poker:
        <br />
        {pokerRules}
      </p>
      <p className="flex justify-center text-center pb-5">Idiot's Delight</p>
    </div>
  );
};

export default Rules;
