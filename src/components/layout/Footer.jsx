import { Rocket } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-white/10 py-12 px-8">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}

          <div>
            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center">
                <Rocket size={20} className="text-white" />
              </div>

              <h2 className="text-2xl font-bold text-white">
                Nexora <span className="text-cyan-400">AI</span>
              </h2>

            </div>

            <p className="text-gray-400 mt-5 leading-7">
              Empowering students with Artificial Intelligence to
              discover careers, improve resumes and become
              industry-ready.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <a href="#home" className="text-gray-400 hover:text-cyan-400 transition">
                Home
              </a>

              <a href="#features" className="text-gray-400 hover:text-cyan-400 transition">
                Features
              </a>

              <a href="#about" className="text-gray-400 hover:text-cyan-400 transition">
                About
              </a>

              <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition">
                Contact
              </a>

            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact
            </h3>

            <p className="text-gray-400">
              📧 contact@nexora.ai
            </p>

            <p className="text-gray-400 mt-2">
              📍 India
            </p>

            <p className="text-gray-400 mt-2">
              ☎ +91 70755 23324
            </p>

          </div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500">
          © 2026 Nexora AI. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}