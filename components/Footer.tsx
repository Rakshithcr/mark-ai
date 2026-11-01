export default function Footer() {
  return (
    <footer className="border-t border-cyan-500 mt-20">

      <div className="max-w-7xl mx-auto p-8">

        <h2 className="text-2xl font-bold text-cyan-400">
          MARK.AI
        </h2>

        <p className="mt-3 text-gray-400">
          Built by Rakshith CR
        </p>

        <div className="flex gap-6 mt-6">

          <a
            href="https://github.com/"
            target="_blank"
            className="text-cyan-400 hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="text-cyan-400 hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="mailto:yourmail@example.com"
            className="text-cyan-400 hover:text-white"
          >
            Email
          </a>

        </div>

        <p className="mt-8 text-sm text-gray-500">
          © 2026 MARK.AI. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}