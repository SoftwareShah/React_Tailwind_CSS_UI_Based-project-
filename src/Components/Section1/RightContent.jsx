import RightCard from "./RightCard";

const RightContent = ({ cards }) => (
  <div className="w-full md:w-2/3 h-full overflow-hidden">
    <div className="auto-scroll gap-4 h-full">
      {cards.map((card) => (
        <RightCard key={card.id} id={card.id} label={card.label} img={card.img} />
      ))}
      {cards.map((card) => (
        <RightCard key={"dup-" + card.id} id={card.id} label={card.label} img={card.img} />
      ))}
    </div>
  </div>
);

export default RightContent;
