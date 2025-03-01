import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getMessages, getUsersForSideBar } from "../controllers/message.controllers.js";

const MessageRouter = express.Router();

MessageRouter.get("/user" , protectRoute , getUsersForSideBar)

MessageRouter.get("/:id" , protectRoute, getMessages)

export default MessageRouter