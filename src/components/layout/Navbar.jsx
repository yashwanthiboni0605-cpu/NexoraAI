import { useEffect, useState } from "react";
import { Menu, Moon, Rocket, Sun } from "lucide-react";
import { motion } from "framer-motion";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050816]/90 backdrop-blur-2xl shadow-lg border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8">

        {/* Logo */}
<div className="flex items-center gap-3 cursor-pointer">

  <motion.div
    initial={{ scale: 0, rotate: -180 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{
      duration: 0.8,
      ease: "easeOut",
    }}
    className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/30"
  >
    <Rocket size={20} className="text-white" />
  </motion.div>

  <motion.h1
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      delay: 0.3,
      duration: 0.7,
    }}
    className="text-2xl font-bold text-white"
  >
    Nexora
    <span className="text-violet-400"> AI</span>
  </motion.h1>

</div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-gray-300">

          <li>
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#features" className="hover:text-cyan-400 transition">
              Features
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>

        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          <button className="text-gray-300 hover:text-white transition">
  <Moon size={20} />
</button>

          <a
  href="#resume"
  className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold transition hover:scale-105"
>
  Get Started
</a>

          <button className="md:hidden text-white">
            <Menu />
          </button>

        </div>

      </div>
    </nav>
  );
}