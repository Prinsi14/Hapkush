type MemeCardProps = {
  image: string;
  title: string;
};

export default function MemeCard({ image, title }: MemeCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden 
                    hover:scale-105 transform transition duration-300">

      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>

        <div className="flex justify-between mt-3 text-sm text-gray-600">
          <span>❤️ 1.2k</span>
          <span>💬 230</span>
          <span>🔄 50</span>
        </div>
      </div>
    </div>
  );
}
