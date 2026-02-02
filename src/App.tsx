function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-10 text-center max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          MemeGram 😂
        </h1>

        <p className="text-gray-600 mb-6">
          Welcome to MemeGram! Your memes, your feed.
        </p>

        <button className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;


