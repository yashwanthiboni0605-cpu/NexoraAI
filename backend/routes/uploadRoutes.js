const express = require("express");
const multer = require("multer");
const extractTextFromPDF = require("../services/pdfService");
const analyzeResume = require("../services/groqService");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("resume"), async (req, res) => {

  const resumeText = await extractTextFromPDF(req.file.path);

const analysis = await analyzeResume(resumeText);

console.log("\n========== AI ANALYSIS ==========\n");
console.log(analysis);
console.log("\n===============================\n");

  console.log("\n========== RESUME TEXT ==========\n");
  console.log(resumeText);
  console.log("\n===============================\n");

  let parsedAnalysis;

try {
  parsedAnalysis = JSON.parse(
    analysis.replace(/```json/g, "").replace(/```/g, "").trim()
  );
} catch (err) {
  parsedAnalysis = {
    resumeScore: 0,
    atsScore: 0,
    strengths: [],
    missingSkills: [],
    suggestions: ["Unable to parse AI response"],
  };
}

res.json({
  success: true,
  analysis: parsedAnalysis,
});

});

module.exports = router;