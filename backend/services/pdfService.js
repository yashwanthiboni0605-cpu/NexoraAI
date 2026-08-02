const fs = require("fs");
const path = require("path");
const pdf = require("pdf-parse");

const extractTextFromPDF = async (filePath) => {

  console.log("Received path:", filePath);
  console.log("Absolute path:", path.resolve(filePath));
  console.log("Exists:", fs.existsSync(filePath));

  const dataBuffer = fs.readFileSync(filePath);

  const data = await pdf(dataBuffer);

  return data.text;
};

module.exports = extractTextFromPDF;