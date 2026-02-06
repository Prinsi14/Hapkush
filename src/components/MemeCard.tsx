import { useState } from "react";

interface MemeProps {
  title: string;
  image: string;
}

const MemeCard = ({ title, image }: MemeProps) => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transform transition duration-300">
      
      <img src={image} alt={title} className="w-full h-60 object-cover" />

      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>

        <button
          onClick={() => setLikes(likes + 1)}
          className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
        >
          ❤️ Like {likes}
        </button>
      </div>
    </div>
  );
};

export default MemeCard;












