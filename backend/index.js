import express from "express";
import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5432;

// Configure AWS
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION, 
});

// Upload route
app.post("/upload", (req, res) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: "medical_update_dentist.pdf", 
    Body: "Hello from Node.js", 
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.error("Upload error:", err);
      return res.status(500).send("Error uploading file");
    }
    res.json({ url: data.Location });
  });
});

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
