import {
  Brain,
  FileSearch,
  Route,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "AI Career Guidance",
    description:
      "Receive personalized career recommendations based on your skills and goals.",
  },
  {
    icon: FileSearch,
    title: "Resume Analysis",
    description:
      "Analyze resumes with AI to improve ATS compatibility and overall quality.",
  },
  {
    icon: Route,
    title: "Learning Roadmaps",
    description:
      "Get a customized learning roadmap to reach your dream career faster.",
  },
  {
    icon: Briefcase,
    title: "Industry Ready",
    description:
      "Prepare for interviews and become job-ready with AI-powered suggestions.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#050816] py-28 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <p className="uppercase tracking-[5px] text-cyan-400">
            About Nexora AI
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Your AI Career Companion
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Nexora AI helps students analyze resumes, identify missing
            skills, generate personalized learning roadmaps, and prepare
            for their dream careers using Artificial Intelligence.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400 transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center mb-6">

                  <Icon className="text-white" size={30} />

                </div>

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7">
                  {item.description}
                </p>

              </motion.div>
            );

          })}

        </div>

      </div>
    </section>
  );
}