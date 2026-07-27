import { Upload, FileText, CheckCircle, Sparkles } from "lucide-react";

export default function ResumeDemo() {
  return (
    <section
  id="about"
  className="py-28 bg-[#050816]"
>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <p className="uppercase tracking-[5px] text-cyan-400">
            AI Resume Analyzer
          </p>

          <h2 className="text-5xl font-bold text-white mt-5">
            Build a Resume
            <br />
            Recruiters Love.
          </h2>

          <p className="text-gray-400 mt-6 leading-8 max-w-xl">
            Upload your resume and let Nexora AI instantly analyze
            your profile, calculate your ATS score, identify missing
            skills, and recommend improvements.
          </p>

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4">
              <CheckCircle className="text-cyan-400" />
              <span className="text-gray-300">
                ATS Score Analysis
              </span>
            </div>

            <div className="flex items-center gap-4">
              <CheckCircle className="text-cyan-400" />
              <span className="text-gray-300">
                Missing Skills Detection
              </span>
            </div>

            <div className="flex items-center gap-4">
              <CheckCircle className="text-cyan-400" />
              <span className="text-gray-300">
                AI Improvement Suggestions
              </span>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex justify-center">

          <div className="w-[430px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">

            <div className="flex items-center gap-3">

              <Upload className="text-cyan-400"/>

              <h3 className="text-xl font-semibold text-white">
                Resume Upload
              </h3>

            </div>

            <div className="mt-8 rounded-2xl border-2 border-dashed border-cyan-400/40 p-10 text-center">

              <FileText
                size={50}
                className="mx-auto text-violet-400"
              />

              <p className="text-gray-300 mt-5">
                Resume.pdf
              </p>

              <button className="mt-6 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 text-white font-semibold hover:scale-105 transition">
                Upload Resume
              </button>

            </div>

            <div className="mt-10">

              <div className="flex justify-between mb-2">
                <span className="text-gray-300">
                  ATS Score
                </span>

                <span className="text-cyan-400 font-bold">
                  94%
                </span>
              </div>

              <div className="w-full h-3 rounded-full bg-gray-700">

                <div className="h-3 w-[94%] rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"></div>

              </div>

            </div>

            <div className="mt-8 rounded-xl bg-[#0d1325] p-5">

              <div className="flex items-center gap-3 mb-4">

                <Sparkles className="text-yellow-400"/>

                <h4 className="text-white font-semibold">
                  AI Suggestions
                </h4>

              </div>

              <ul className="space-y-3 text-gray-300">

                <li>✓ Add React Projects</li>

                <li>✓ Mention Git & GitHub</li>

                <li>✓ Improve Technical Summary</li>

                <li>✓ Include Internship Experience</li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}