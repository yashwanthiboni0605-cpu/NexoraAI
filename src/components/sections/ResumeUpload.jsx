import { useState } from "react";
import { Upload, FileText, CheckCircle } from "lucide-react";
import toast from "react-hot-toast";
import api from "../../services/api";

export default function ResumeUpload({ setAnalysis })  {
  const [file, setFile] = useState(null);
const [loading, setLoading] = useState(false);

  const handleFile = async (e) => {
  const selected = e.target.files[0];

  if (!selected) return;

  if (selected.type !== "application/pdf") {
    toast.error("Please upload a PDF file.");
    return;
  }

  const formData = new FormData();
  formData.append("resume", selected);

  try {

  setLoading(true);

  const res = await api.post("/api/upload", formData);

  console.log(res.data);

  setFile(selected);

setAnalysis(res.data.analysis);

toast.success("Resume analyzed successfully!");

setLoading(false);

setTimeout(() => {
  document
    .getElementById("analysis")
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
}, 300);

} catch (err) {
  setLoading(false);

  console.error(err);

  toast.error("Something went wrong while analyzing your resume.");
}


};

  return (
    <section
      id="resume"
      className="bg-[#050816] py-28 px-8"
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-cyan-400">
            AI Resume Analyzer
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Upload Your Resume
          </h2>

          <p className="text-gray-400 mt-5">
            Upload your resume and let Nexora AI analyze it.
          </p>
        </div>

        <label
          className="block cursor-pointer rounded-3xl border-2 border-dashed border-cyan-400/40 bg-white/5 p-16 text-center backdrop-blur-xl transition hover:border-cyan-400 hover:bg-white/10"
        >

          <input
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handleFile}
          />

          {loading ? (
  <>
    <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-cyan-400 mx-auto"></div>

    <h3 className="text-3xl font-bold text-white mt-8">
      Nexora AI is analyzing...
    </h3>

    <p className="text-cyan-300 mt-4">
      Please wait while we analyze your resume.
    </p>

    <div className="mt-8 w-full bg-gray-700 rounded-full h-2 overflow-hidden">
      <div className="bg-cyan-400 h-2 animate-pulse w-full"></div>
    </div>

    <div className="mt-8 text-gray-400 space-y-2">
      <p>📄 Extracting Resume...</p>
      <p>🧠 Finding Skills...</p>
      <p>📊 Calculating ATS Score...</p>
      <p>💼 Finding Best Career...</p>
    </div>
  </>
) : !file ? (
  <>
    <Upload
      size={70}
      className="mx-auto text-cyan-400"
    />

    <h3 className="text-2xl font-bold text-white mt-6">
      Drag & Drop Resume
    </h3>

    <p className="text-gray-400 mt-3">
      or Click to Browse
    </p>
  </>
) : (
  <>
    <CheckCircle
      size={70}
      className="mx-auto text-green-400"
    />

    <h3 className="text-2xl font-bold text-white mt-6">
      Upload Successful
    </h3>

    <div className="mt-6 flex justify-center items-center gap-3 text-cyan-300">
      <FileText />
      <span>{file.name}</span>
    </div>
  </>
)}

        </label>

      </div>
    </section>
  );
}