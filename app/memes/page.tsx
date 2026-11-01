import Navbar from "@/components/Navbar";

const memes = [
  {
    title: "DevOps Meme",
    image: "https://picsum.photos/500/300?random=1",
  },
  {
    title: "Kubernetes Meme",
    image: "https://picsum.photos/500/300?random=2",
  },
  {
    title: "AI Meme",
    image: "https://picsum.photos/500/300?random=3",
  },
  {
    title: "Cloud Engineer Meme",
    image: "https://picsum.photos/500/300?random=4",
  },
  {
    title: "Programmer Meme",
    image: "https://picsum.photos/500/300?random=5",
  },
  {
    title: "Terraform Meme",
    image: "https://picsum.photos/500/300?random=6",
  },
];



export default function MemesPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
       <Navbar />
      <h1 className="text-6xl font-bold text-cyan-400 mb-10">
        MEME ZONE
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {memes.map((meme, index) => (
          <div
            key={index}
            className="border border-cyan-500 rounded-xl overflow-hidden hover:scale-105 transition"
          >
            <img
              src={meme.image}
              alt={meme.title}
              className="w-full h-60 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-bold text-cyan-400">
                {meme.title}
              </h2>
            </div>

          </div>
        ))}

      </div>

    </main>
  );
}