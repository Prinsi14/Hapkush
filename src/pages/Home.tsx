import { useEffect, useState } from "react";
import MemeCard from "../components/MemeCard";

interface Meme {
  title: string;
  url: string;
}

const Home = () => {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMemes = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://meme-api.com/gimme/10");
      const data = await res.json();
      setMemes((prev) => [...prev, ...data.memes]);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMemes();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.offsetHeight
      ) {
        fetchMemes();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {memes.map((meme, index) => (
          <MemeCard
            key={index}
            title={meme.title}
            image={meme.url}
          />
        ))}
      </div>

      {loading && (
        <p className="text-center mb-6 text-lg dark:text-white">
          Loading more memes 😂...
        </p>
      )}
    </>
  );
};

export default Home;






   

   





