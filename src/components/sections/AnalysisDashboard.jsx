import { CheckCircle, AlertTriangle, TrendingUp, Briefcase } from "lucide-react";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import { Download } from "lucide-react";
import downloadReport from "../../utils/downloadReport";

export default function AnalysisDashboard({ analysis }) {
  if (!analysis) {
  return (
    <section
  id="analysis"
  className="bg-[#050816] py-28 px-8"
>
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-5xl font-bold text-white">
          Your Resume Report
        </h2>

        <p className="text-gray-400 mt-6 text-lg">
          Upload your resume to see the AI analysis.
        </p>

      </div>
    </section>
  );
}
  return (
    <section id="analysis" className="bg-[#050816] py-28 px-8">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-cyan-400">
            AI Resume Analysis
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Your Resume Report
          </h2>

          <p className="text-gray-400 mt-5">
            Here's what Nexora AI found after analyzing your resume.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8">

  <h3 className="text-white text-2xl font-bold text-center mb-8">
    Resume Score
  </h3>

  <div className="w-40 h-40 mx-auto">

    <CircularProgressbar
  value={analysis.resumeScore}
  text={`${analysis.resumeScore}%`}
      styles={buildStyles({
        textColor: "#ffffff",
        pathColor: "#06b6d4",
        trailColor: "#1f2937",
        strokeLinecap: "round",
      })}
    />

  </div>

</div>

          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8">

  <h3 className="text-white text-2xl font-bold text-center mb-8">
    ATS Compatibility
  </h3>

  <div className="w-40 h-40 mx-auto">

    <CircularProgressbar
  value={analysis.atsScore}
  text={`${analysis.atsScore}%`}
      styles={buildStyles({
        textColor: "#ffffff",
        pathColor: "#22c55e",
        trailColor: "#1f2937",
        strokeLinecap: "round",
      })}
    />

  </div>

</div>

          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 text-center">

            <AlertTriangle className="mx-auto text-yellow-400" size={42} />

            <h3 className="text-white text-2xl font-bold mt-5">
  {analysis.missingSkills.length} Skills
</h3>

            <p className="text-gray-400 mt-2">
              Missing Skills
            </p>

          </div>

          <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 text-center">

            <Briefcase className="mx-auto text-violet-400" size={42} />

            <h3 className="text-white text-2xl font-bold mt-5">
  {analysis.careerMatch}
</h3>

            <p className="text-gray-400 mt-2">
  {analysis.careerReason}
</p>

          </div>

        </div>

        {/* Bottom Section */}

        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          {/* Missing Skills */}

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

            <h3 className="text-2xl font-bold text-white mb-6">
              Missing Skills
            </h3>

            <div className="flex flex-wrap gap-4">

  {analysis.missingSkills.map((skill, index) => (

    <span
      key={index}
      className="px-4 py-2 rounded-full bg-red-500/20 text-red-300"
    >
      {skill}
    </span>

  ))}

</div>

          </div>

          {/* AI Suggestions */}

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

            <h3 className="text-2xl font-bold text-white mb-6">
              AI Suggestions
            </h3>

            <ul className="space-y-4 text-gray-300">

  {analysis.suggestions.map((suggestion, index) => (

    <li key={index}>

      ✅ {suggestion}

    </li>

  ))}

</ul>

          </div>

        </div>

      </div>

    <div className="flex justify-center mt-14">
  <button
    onClick={() => downloadReport(analysis)}
    className="flex items-center gap-3 px-8 py-4 rounded-2xl
               bg-cyan-500 hover:bg-cyan-600
               text-white font-semibold text-lg
               transition-all duration-300
               hover:scale-105 shadow-lg"
  >
    <Download size={22} />
    Download AI Report
  </button>
</div>
    </section>
  );
}