import Navbar from "./Navbar";
import Page1Content from "./Page1Content";

const Section1 = ({ cards }) => {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      <Page1Content cards={cards} />
    </div>
  );
};

export default Section1;
