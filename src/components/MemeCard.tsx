interface MemeCardProps {
  title: string;
  image: string;
}

const MemeCard = ({ title, image }: MemeCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <img src={image} alt={title} className="h-60 w-full object-cover" />
      <div className="p-4">
        <h3 className="font-semibold dark:text-white">{title}</h3>
        <button className="mt-3 bg-pink-500 text-white px-4 py-2 rounded-lg">
          ❤️ Like
        </button>
      </div>
    </div>
  );
};

export default MemeCard;













