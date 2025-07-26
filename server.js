import express from "express";
import "dotenv/config";
import docsRoute from "./routes/document.route.js";
import { connectDB } from "./config/db.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT;

app.use("/api/documents", docsRoute);

app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`);
  connectDB();
});
