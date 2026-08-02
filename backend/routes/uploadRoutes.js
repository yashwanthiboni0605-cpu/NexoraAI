const express = require("express");
const multer = require("multer");
const extractTextFromPDF = require("../services/pdfService");
const analyzeResume = require("../services/groqService");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const uploadDir = path.join(__dirname, "../uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("resume"), async (req, res) => {

  try {

    console.log("Uploaded file:", req.file);
console.log("req.file.path:", req.file.path);
console.log("File exists before reading:", fs.existsSync(req.file.path));

    const resumeText = await extractTextFromPDF(req.file.path);

    // Delete uploaded PDF after reading it
    fs.unlinkSync(req.file.path);

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

  } catch (err) {

    console.error("Upload Error:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }

});

module.exports = router;