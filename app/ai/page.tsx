import Navbar from "@/components/Navbar";
export default function AIPage() {
  const news = [
    {
      title: "OpenAI Advances AI Models",
      description:
        "Latest developments in generative AI and large language models."
    },
    {
      title: "Microsoft AI Updates",
      description:
        "New AI integrations across Azure and Microsoft ecosystem."
    },
    {
      title: "NVIDIA AI Breakthrough",
      description:
        "AI hardware and accelerated computing continue to evolve."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <Navbar />
      <h1 className="text-6xl font-bold text-cyan-400 mb-10">
        AI NEWS
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <div
            key={index}
            className="border border-cyan-500 rounded-xl p-6 hover:bg-cyan-500/10 transition"
          >
            <h2 className="text-2xl text-cyan-400 mb-3">
              {item.title}
            </h2>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}