import {
  ArrowRight,
  Brain,
  Cpu,
  Sparkles,
  Bot,
} from "lucide-react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Modal from "../ui/Modal";


export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
  id="home"
  className="relative min-h-screen overflow-hidden bg-[#050816]"
>

      {/* Animated Background Glow */}
      <motion.div
  className="absolute top-20 left-20 w-[500px] h-[500px] rounded-full bg-violet-600/35 blur-[180px]"
  animate={{
    x: [0, 120, 0],
    y: [0, 80, 0],
    scale: [1, 1.2, 1],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

      <motion.div
  className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full bg-cyan-500/35 blur-[180px]"
  animate={{
    x: [0, -120, 0],
    y: [0, -80, 0],
    scale: [1, 1.15, 1],
  }}
  transition={{
    duration: 14,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
{/* Floating Icons */}

<motion.div
  className="absolute top-40 left-24 text-violet-400 opacity-30"
  animate={{
    y: [0, -25, 0],
    rotate: [0, 10, 0],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
  }}
>
  <Brain size={48} />
</motion.div>

<motion.div
  className="absolute top-24 right-40 text-cyan-400 opacity-30"
  animate={{
    y: [0, 30, 0],
    rotate: [0, -10, 0],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
  }}
>
  <Cpu size={42} />
</motion.div>

<motion.div
  className="absolute bottom-40 left-32 text-blue-400 opacity-25"
  animate={{
    y: [0, -20, 0],
    x: [0, 15, 0],
  }}
  transition={{
    duration: 7,
    repeat: Infinity,
  }}
>
  <Sparkles size={40} />
</motion.div>

<motion.div
  className="absolute bottom-32 right-24 text-violet-300 opacity-30"
  animate={{
    y: [0, 25, 0],
    rotate: [0, 15, 0],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
  }}
>
  <Bot size={48} />
</motion.div>
      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto min-h-screen grid lg:grid-cols-2 items-center gap-16 px-8">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold mb-5">
            AI Powered Career Platform
          </p>

          <h1 className="text-white text-6xl lg:text-7xl font-extrabold leading-tight">

  Transform

  <br />

  <span className="bg-gradient-to-r from-violet-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">

    <Typewriter
      words={[
        "Potential",
        "Dreams",
        "Skills",
        "Talent",
        "Future",
      ]}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={90}
      deleteSpeed={60}
      delaySpeed={1800}
    />

  </span>

  <br />

  Into Profession.

</h1>
          <p className="mt-8 max-w-xl text-lg text-gray-400 leading-8">
            Nexora AI helps students discover career paths,
            build resumes, practice interviews and become
            industry-ready using Artificial Intelligence.
          </p>

          <div className="flex gap-5 mt-10">

            <button
  onClick={() =>
    document
      .getElementById("roadmap")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 text-white font-semibold hover:scale-105 transition"
>
  Get Started
  <ArrowRight size={18} />
</button>

            <button
  onClick={() => setIsModalOpen(true)}
  className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-white backdrop-blur-xl hover:bg-white/10 transition duration-300"
>
  Watch Demo
</button>

          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-10">

            <div>
              <h2 className="text-3xl font-bold text-white">
                5,000+
              </h2>
              <p className="text-gray-400">
                Students
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">
                150+
              </h2>
              <p className="text-gray-400">
                Companies
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">
                95%
              </h2>
              <p className="text-gray-400">
                Success Rate
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="flex justify-center"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >

          <div className="w-[420px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">

            <h3 className="text-2xl font-bold text-white mb-6">
              AI Career Assistant
            </h3>

            <div className="space-y-5">

              <div className="bg-[#0d1325] rounded-xl p-4">
                <p className="text-gray-400 text-sm">
                  Resume Score
                </p>

                <h2 className="text-4xl font-bold text-cyan-400">
                  94%
                </h2>
              </div>

              <div className="bg-[#0d1325] rounded-xl p-4">

                <p className="text-gray-400 text-sm">
                  Skill Progress
                </p>

                <div className="w-full h-3 rounded-full bg-gray-700 mt-3">

                  <motion.div
                    className="h-3 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{
                      duration: 2,
                    }}
                  />

                </div>

              </div>

              <div className="bg-[#0d1325] rounded-xl p-4 space-y-2">

                <p className="text-gray-300">
                  ✓ Resume Optimized
                </p>

                <p className="text-gray-300">
                  ✓ Interview Ready
                </p>

                <p className="text-gray-300">
                  ✓ AI Career Roadmap Generated
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    <Modal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  title="🚀 Nexora AI Demo"
>
  <div className="text-center">

    <div className="rounded-2xl border border-dashed border-cyan-400/40 p-16">

      <h3 className="text-2xl font-bold text-white mb-4">
        Demo Coming Soon
      </h3>

      <p className="text-gray-400">
        Here we'll play your Nexora AI introduction video.
      </p>

    </div>

  </div>
</Modal>
    </section>
  );
}