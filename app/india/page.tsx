import Navbar from "@/components/Navbar";

export default function IndiaPage() {
  const news = [
    {
      title: "Technology",
      content:
        "Latest technology updates from India including startups and innovation."
    },
    {
      title: "Economy",
      content:
        "Track India's economy, finance and market movements."
    },
    {
      title: "Defence",
      content:
        "Latest defence and national security developments."
    },
    {
      title: "Space",
      content:
        "ISRO missions and India's space achievements."
    },
    {
      title: "Startups",
      content:
        "Indian unicorns, startups and entrepreneurship news."
    },
    {
      title: "Government",
      content:
        "Policies, schemes and governance updates."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white p-10">
       <Navbar />
      <h1 className="text-6xl font-bold text-cyan-400 mb-10">
        INDIA TODAY
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <div
            key={index}
            className="border border-cyan-500 rounded-xl p-6 hover:bg-cyan-500/10 transition-all"
          >
            <h2 className="text-2xl font-bold text-cyan-400 mb-3">
              {item.title}
            </h2>

            <p className="text-gray-300">
              {item.content}
            </p>
          </div>
        ))}
      </div>

    </main>
  );
}