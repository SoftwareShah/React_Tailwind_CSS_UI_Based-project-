import { MoveRight } from "lucide-react";

const RightCard = ({ id, img, label }) => {
  return (
    <div className="relative shrink-0 w-52 sm:w-60 md:w-64 h-72 sm:h-80 md:h-full rounded-2xl overflow-hidden shadow-md">
      <img src={img} alt={label} className="w-full h-full object-cover" />

      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent" />

    
      <div className="absolute top-3 left-3 bg-white/90 text-black text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center shadow">
        {id}
      </div>


      <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-full">
        {label}
      </div>

      
      <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-4">
        <p className="text-white text-xs sm:text-sm leading-relaxed text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, error ullam.
        </p>
        <div className="flex gap-2">
          <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-3 py-1.5 rounded-lg text-xs font-semibold">
            Satisfied
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-3 py-1.5 rounded-lg flex items-center justify-center">
            <MoveRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
