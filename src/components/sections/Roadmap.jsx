import { CheckCircle2, CalendarDays } from "lucide-react";

export default function Roadmap({ analysis }) {

  if (!analysis || !analysis.roadmap) {
    return (
      <section
        id="roadmap"
        className="bg-[#050816] py-28 px-8"
      >
        <div className="max-w-7xl mx-auto text-center">

          <p className="uppercase tracking-[5px] text-cyan-400">
            AI Career Roadmap
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Personalized Learning Roadmap
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Upload your resume to generate your personalized roadmap.
          </p>

        </div>
      </section>
    );
  }

  return (
    <section
      id="roadmap"
      className="bg-[#050816] py-28 px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[5px] text-cyan-400">
            AI Career Roadmap
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Personalized Learning Journey
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Based on your resume, Nexora AI created a customized roadmap
            to help you achieve your target career.
          </p>

        </div>

        {/* Roadmap */}

        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          {analysis.roadmap.map((week, index) => (

            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400 transition duration-300"
            >

              <div className="flex items-center gap-4 mb-6">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center">

                  <CalendarDays className="text-white" size={28} />

                </div>

                <h3 className="text-3xl font-bold text-white">
                  {week.title}
                </h3>

              </div>

              <div className="space-y-4">

                {week.topics.map((topic, i) => (

                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl bg-white/5 p-4"
                  >

                    <CheckCircle2
                      className="text-green-400"
                      size={22}
                    />

                    <span className="text-gray-200 text-lg">
                      {topic}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}