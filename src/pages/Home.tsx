import MemeCard from "../components/MemeCard";

export default function Home() {

  const memes = [
    {
      image: "https://i.imgflip.com/30b1gx.jpg",
      title: "When you fix a bug without knowing how 😎"
    },
    {
      image: "https://i.imgflip.com/1bij.jpg",
      title: "Me learning React be like 😂"
    },
    {
      image: "https://i.imgflip.com/26am.jpg",
      title: "Group project vs reality 🤡"
    },
    {
      image: "https://i.imgflip.com/2wifvo.jpg",
      title: "When assignment deadline is tomorrow 😭"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">

      <h1 className="text-4xl font-bold text-center mb-10">
        Trending Memes 🔥
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {memes.map((meme, index) => (
          <MemeCard
            key={index}
            image={meme.image}
            title={meme.title}
          />
        ))}
      </div>

    </div>
  );
}


