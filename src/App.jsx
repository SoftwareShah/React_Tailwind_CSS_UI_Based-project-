import Section1 from "./Components/Section1/Section1.jsx";
import Section2 from "./Components/Section2/Section2.jsx";
const App = () => {
  const cards = [
    {
      id: 1,
      label: "Satisfied",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop",
    },
    {
      id: 2,
      label: "Underserved",
      img: "https://images.unsplash.com/photo-1737574821698-862e77f044c1?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      label: "Underbanked",
      img: "https://plus.unsplash.com/premium_photo-1661778564677-e2f4ab3c2a3b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      label: "Analytics",
      img: "https://plus.unsplash.com/premium_photo-1661766386981-1140b7b37193?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 5,
      label: "Growth",
      img: "https://plus.unsplash.com/premium_photo-1661772776448-8a70da4971ff?q=80&w=687&auto=format&fit=crop",
    },
    {
      id: 6,
      label: "Insights",
      img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div>
      <Section1 cards={cards} />
      <Section2 />
    </div>
  );
};

export default App;
