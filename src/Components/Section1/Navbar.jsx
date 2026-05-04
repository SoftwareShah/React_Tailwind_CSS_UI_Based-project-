const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 md:px-12 lg:px-16 border-b border-gray-100">
      <h4 className="bg-black text-white py-2 px-4 md:px-6 rounded-full uppercase text-xs md:text-sm tracking-widest">
        Target Audience
      </h4>
      <button className="bg-gray-100 hover:bg-gray-200 transition px-4 md:px-6 py-2 uppercase rounded-full tracking-widest text-xs md:text-sm font-medium">
        Digital Banking Platform
      </button>
    </nav>
  );
};

export default Navbar;
