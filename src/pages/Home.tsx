import MemeCard from "../components/MemeCard";

const memes = [
  {
    title: "When code works on first try 😎",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800"
  },
  {
    title: "Debugging be like 🤯",
    image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800"
  },
  {
    title: "Frontend vs Backend 😂",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
  }
];


function Home() {
  return (
    <div className="p-6 grid md:grid-cols-3 gap-6">
      {memes.map((meme, index) => (
        <MemeCard
          key={index}
          title={meme.title}
          image={meme.image}
        />
      ))}
    </div>
  );
}

export default Home;




   

   





