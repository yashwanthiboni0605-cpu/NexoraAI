import { useState } from "react";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Trusted from "./components/sections/Trusted";
import Features from "./components/sections/Features";
import Roadmap from "./components/sections/Roadmap";
import MouseGlow from "./components/common/MouseGlow";
import ResumeUpload from "./components/sections/ResumeUpload";
import AnalysisDashboard from "./components/sections/AnalysisDashboard";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {

  const [analysis, setAnalysis] = useState(null);

  return (

    <div className="bg-[#050816] min-h-screen">

      <MouseGlow />

      <Navbar />

      <Hero />

      <Trusted />

      <Features />

      <About />

      <ResumeUpload
        setAnalysis={setAnalysis}
      />

      <AnalysisDashboard
        analysis={analysis}
      />

      <Roadmap analysis={analysis} />

      <Contact />

      <Footer />

    </div>

  );
}

export default App;