import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import AuthRouter from "./routes/auth.route.js";
import { Connectdb } from "./lib/db.js";
import cookieParser from "cookie-parser";
import MessageRouter from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();
const port = process.env.PORT;

app.use(express.json({ limit: "200mb" }));
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api/auth", AuthRouter);
app.use("/api/message", MessageRouter);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  Connectdb();
});
