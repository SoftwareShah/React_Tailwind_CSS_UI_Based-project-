import ArrowText from "./ArrowText";
import HeroText from "./HeroText";

const LeftContent = () => {
  return (
    <div className="w-full md:w-1/3 shrink-0 flex flex-col justify-between bg-gray-100 rounded-2xl overflow-hidden">
      <HeroText />
      <ArrowText />
    </div>
  );
};

export default LeftContent;
