import LeftContent from "./LeftContent.jsx";
import RightContent from "./RightContent.jsx";

const Page1Content = ({ cards }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 px-6 md:px-12 lg:px-16 py-6 md:py-8 md:h-[calc(100vh-73px)]">
      <LeftContent />
      <RightContent cards={cards} />
    </div>
  );
};

export default Page1Content;
