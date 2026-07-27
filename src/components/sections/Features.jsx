import {
  Brain,
  FileText,
  Briefcase,
  GraduationCap,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Career Guidance",
    description:
      "Receive personalized career recommendations based on your interests, skills, and goals.",
  },
  {
    icon: FileText,
    title: "Resume Analyzer",
    description:
      "Get instant AI feedback to improve your resume and increase interview chances.",
  },
  {
    icon: Briefcase,
    title: "Job Matching",
    description:
      "Discover internships and jobs that perfectly match your profile.",
  },
  {
    icon: GraduationCap,
    title: "Learning Roadmaps",
    description:
      "Follow AI-generated learning paths to become industry-ready.",
  },
];

export default function Features() {
  return (
    <section
  id="features"
  className="py-28 bg-[#050816]"
>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-cyan-400">
            Features
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Everything You Need
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Nexora AI combines career guidance, resume optimization,
            AI learning paths and job opportunities into one platform.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2"
              >

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center mb-6">

                  <Icon className="text-white" size={30} />

                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-400">
                  {feature.description}
                </p>

              </div>

            );
          })}

        </div>

      </div>

    </section>
  );
}