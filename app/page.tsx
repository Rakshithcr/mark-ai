import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      <Navbar />

      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 blur-3xl" />

      <section className="relative flex flex-col items-center justify-center h-[90vh]">

        <h1 className="text-8xl md:text-9xl font-bold text-cyan-400 animate-pulse">
          MARK.AI
        </h1>

        <p className="mt-8 text-2xl text-gray-300">
          Cloud • DevOps • AI • Kubernetes
        </p>

        <p className="mt-4 text-gray-500 max-w-2xl text-center">
          Futuristic AI Command Center built by Rakshith CR
        </p>

        <div className="flex gap-6 mt-10">

          <a
            href="/portfolio"
            className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400"
          >
            Portfolio
          </a>

          <a
            href="/assistant"
            className="px-8 py-4 border border-cyan-500 rounded-xl hover:bg-cyan-500/10"
          >
            MARK AI
          </a>

        </div>

      </section>
     <Footer />
    </main>
  
  );
}