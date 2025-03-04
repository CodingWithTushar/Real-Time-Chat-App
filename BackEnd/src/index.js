import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import AuthRouter from "./routes/auth.route.js";
import { Connectdb } from "./lib/db.js";
import cookieParser from "cookie-parser";
import MessageRouter from "./routes/message.route.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors(
  {origin: "http://localhost:5173",
  credentials: true}
));
app.use(cookieParser())

const port  = process.env.PORT

app.use("/api/auth", AuthRouter);
app.use("/api/message", MessageRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  Connectdb()
});
