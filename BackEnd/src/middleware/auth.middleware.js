import jwt from "jsonwebtoken";
import UserModel from "../model/user.model.js";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRECT = process.env.JWT_SECRET;

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookie.jwt;
    if (!token) {
      res.status(403).json({
        message: "Unauthorized  - No Token Provided",
      }); 
    }

    const DecodedToken = jwt.verify(
      {
        token,
      },
      JWT_SECRECT
    );

    if (!DecodedToken) {
        res.status(401).json({
            message: "InValid Token"
        })
    }

    const user = await UserModel.findById(DecodedToken.userId).select("-password")

    if (!user) {
        res.status(404).res({
            message: "User not found"
        })
    }

    req.user = user

    next()
  } catch (e) {}
};
